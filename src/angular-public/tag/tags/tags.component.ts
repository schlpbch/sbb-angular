import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, merge, Observable, of, Subject } from 'rxjs';
import { map, mergeAll, mergeMap, switchMap, takeUntil } from 'rxjs/operators';

import { TagComponent, TAGS_CONTAINER } from '../tag/tag.component';

@Component({
  selector: 'sbb-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers: [
    {
      provide: TAGS_CONTAINER,
      useExisting: TagsComponent,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'sbb-tags',
  },
})
export class TagsComponent implements AfterContentInit, OnDestroy {
  /**
   * Total amount visible on the all tag.
   * If not provided, the total amount is calculated by the sum of all amounts of all tags.
   */
  @Input()
  set totalAmount(totalAmount: number) {
    this._totalAmountSetAsInput = true;
    this._totalAmount.next(coerceNumberProperty(totalAmount));
  }
  get totalAmount(): number {
    return this._totalAmount.value;
  }
  /** @docs-private */
  _totalAmount = new BehaviorSubject<number>(0);

  private _totalAmountSetAsInput = false;

  /**
   *  Css class associated to sbb-tags.
   *  @deprecated internal detail
   */
  sbbTagsClass = true;

  /** Refers to the tags contained. */
  @ContentChildren(forwardRef(() => TagComponent))
  tags: QueryList<TagComponent>;
  /** Refers to the tag always displayed in the filter. */
  @ViewChild('allTag', { static: true })
  allTag: TagComponent;

  /**
   * @docs-private
   * @deprecated internal detail
   */
  _amount: Observable<number>;

  private _destroyed = new Subject();

  ngAfterContentInit() {
    this._tagsHandleChecking();

    // listen to tag changes and amount changes of all tag components
    merge<TagComponent[]>(of(this.tags.toArray()), this.tags.changes)
      .pipe(
        mergeMap((tags) => [
          of(this.tags.toArray()),
          this.tags.changes,
          ...tags.map((item) =>
            item.amountChange.pipe(
              map((number) => tags),
              takeUntil(merge(this._destroyed, this.tags.changes))
            )
          ),
        ]),
        mergeAll(),
        takeUntil(this._destroyed)
      )
      .subscribe((tags: TagComponent[]) => {
        if (this._totalAmountSetAsInput) {
          return;
        }
        const calculatedTotalAmount = tags.reduce(
          (current, next) => current + Number(next.amount),
          0
        );
        this._totalAmount.next(calculatedTotalAmount);
      });
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    this._totalAmount.complete();
  }

  private _tagsHandleChecking() {
    merge<TagComponent[]>(of(this.tags.toArray()), this.tags.changes)
      .pipe(
        map((tags) =>
          tags.reduce(
            (current, next) => current.concat(next.tagChecking$, next.change, next._internalChange),
            [] as Observable<unknown>[]
          )
        ),
        switchMap((o) => merge(...o)),
        takeUntil(this._destroyed)
      )
      .subscribe(() => this.setAllTagState());
  }

  setAllTagState() {
    const noTagChecked = this.tags.map((t) => !t.disabled && t.checked).every((v) => !v);
    if (noTagChecked !== this.allTag.checked) {
      this.allTag.checked = noTagChecked;
    }
  }

  allTagClick() {
    this.allTag._setCheckedAndEmit(true);
    this.tags.forEach((t) => t._setCheckedAndEmit(false));
  }

  // tslint:disable: member-ordering
  static ngAcceptInputType_totalAmount: NumberInput;
  // tslint:enable: member-ordering
}
