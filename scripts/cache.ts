#!/usr/bin/env node

import { existsSync, readdirSync, statSync, unlinkSync } from 'fs';
import minimist from 'minimist';
import { homedir } from 'os';
import { basename, join } from 'path';

/** Bazel cache location (See Remote Disk Caching in .bazelrc) */
const bazelCacheDir = join(homedir(), '.bazel-cache/sbb-angular');

class FileEntry {
  readonly size: number;
  readonly modified: Date;
  readonly name: string;

  constructor(readonly path: string) {
    const stats = statSync(this.path);
    this.size = stats.size;
    this.modified = stats.mtime;
    this.name = basename(this.path);
  }
}

class RemovalResult {
  totalSize = 0;
  removedAmount = 0;
  get reducedSize() {
    return this.totalSize - this._reducedSize;
  }

  private _reducedSize = 0;

  addRemovable(entry: FileEntry) {
    this.removedAmount += 1;
    this._reducedSize += entry.size;
  }
}

class LRUCache {
  /** Entries sorted by modified descending */
  private _entries: FileEntry[];

  constructor(readonly path: string) {
    this._entries = existsSync(this.path)
      ? readdirSync(this.path, { withFileTypes: true })
          .filter((d) => d.isFile())
          .map((d) => new FileEntry(join(this.path, d.name)))
          .sort((a, b) => b.modified.valueOf() - a.modified.valueOf())
      : [];
  }

  removeLargerThan(size: number) {
    const result = new RemovalResult();
    for (const entry of this._entries) {
      result.totalSize += entry.size;
      if (entry.size > size) {
        result.addRemovable(entry);
        this._deleteEntry(entry);
      }
    }
    return result;
  }

  removeOldestExceedingFiles(size: number) {
    const result = new RemovalResult();
    for (const entry of this._entries) {
      result.totalSize += entry.size;
      if (result.totalSize > size) {
        result.addRemovable(entry);
        this._deleteEntry(entry);
      }
    }
    return result;
  }

  private _deleteEntry(entry: FileEntry) {
    const index = this._entries.indexOf(entry);
    if (index >= 0) {
      this._entries.splice(index, 1);
    }
    unlinkSync(entry.path);
  }
}

if (module === require.main) {
  const options = minimist(process.argv.slice(2));
  const [target] = options._;
  if (!target) {
    throw new Error('Target parameter required');
  }

  if (target === 'clean') {
    cleanBazelCache(options.path || bazelCacheDir, options as any);
  }
}

/**
 * Removes files which exeed the max size. Oldest files are removed first.
 * @param path The path to the disk cache.
 * @param maxSize The max allowed cache size.
 */
function cleanBazelCache(path: string, options: { maxSize?: string; individualMaxSize?: string }) {
  const maxSize = options.maxSize || '0Bytes';
  const cache = new LRUCache(path);
  if (options.individualMaxSize) {
    removeByIndividualMaxSize(cache, options.individualMaxSize);
  }
  removeByMaxSize(cache, options.maxSize || '0Bytes');
}

function removeByIndividualMaxSize(cache: LRUCache, maxSize: string) {
  const maxSizeInBytes = resolveByteSize(maxSize);
  const result = cache.removeLargerThan(maxSizeInBytes);
  if (result.removedAmount === 0) {
    console.log(
      `No file in ${cache.path} exceeds max file size of ${maxSize}. Nothing was removed...`
    );
  } else {
    console.log(
      `Reduced size of ${cache.path} from ${formatBytes(result.totalSize)} to ${formatBytes(
        result.reducedSize
      )}. Removed ${result.removedAmount} files exceeding ${maxSize}...`
    );
  }
}

function removeByMaxSize(cache: LRUCache, maxSize: string) {
  const maxSizeInBytes = resolveByteSize(maxSize);
  const result = cache.removeOldestExceedingFiles(maxSizeInBytes);
  if (result.removedAmount === 0) {
    console.log(
      `Total size of ${cache.path} ${formatBytes(
        result.totalSize
      )} smaller than ${maxSize}. Nothing was removed...`
    );
  } else {
    console.log(
      `Reduced size of ${cache.path} from ${formatBytes(result.totalSize)} to ${formatBytes(
        result.reducedSize
      )}. Removed ${result.removedAmount} files...`
    );
  }
}

function resolveByteSize(size: string) {
  const [fullMatch, m1, m2] = size.match(/^(\d+)(Bytes|B|KB|MB|GB|TB)?$/i) || [];
  if (!fullMatch) {
    throw new Error('Invalid --maxSize! Expected e.g. 200MB, 1GB');
  }

  const digits = +m1;
  const dimension = m2 ? m2.toUpperCase() : '';
  const dimensionResolution: { [dimension: string]: number } = {
    KB: 1,
    MB: 2,
    GB: 3,
    TB: 4,
  };

  return digits * (2 ** 10) ** (dimensionResolution[dimension] || 0);
}

function formatBytes(bytes: number) {
  if (bytes === 0) {
    return '0 Bytes';
  }

  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}