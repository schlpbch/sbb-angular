import { AnimationEvent } from '@angular/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { TypeRef } from '@sbb-esta/angular-core/common-behaviors';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, startWith, take } from 'rxjs/operators';

import { sbbExpansionAnimations } from '../accordion/accordion-animations';
import { SBB_ACCORDION } from '../accordion/accordion-token';
import type { AccordionDirective } from '../accordion/accordion.directive';

import { ExpansionPanelContentDirective } from './expansion-panel-content';

/** SbbExpansionPanel's states. */
export type ExpansionPanelState = 'expanded' | 'collapsed';

/** Counter for generating unique element ids. */
let uniqueId = 0;

/**
 * `<sbb-expansion-panel>`
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the SbbAccordion component attached.
 */
@Component({
  selector: 'sbb-expansion-panel',
  exportAs: 'sbbExpansionPanel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['disabled', 'expanded'],
  animations: [sbbExpansionAnimations.bodyExpansion],
  // Provide SbbAccordion as undefined to prevent nested expansion panels from registering
  // to the same accordion.
  providers: [
    {
      provide: SBB_ACCORDION,
      useValue: undefined,
    },
  ],
  host: {
    class: 'sbb-expansion-panel',
    '[class.sbb-expanded]': 'expanded',
  },
})
export class ExpansionPanelComponent extends CdkAccordionItem
  implements AfterContentInit, OnChanges, OnDestroy {
  /** @deprecated internal detail */
  sbbExpansionPanelClass = true;
  /** @deprecated internal detail */
  get expandedPanelClass() {
    return this.expanded;
  }

  /** Whether the toggle indicator should be hidden. */
  @Input()
  get hideToggle(): boolean {
    return this._hideToggle || (this.accordion && this.accordion.hideToggle);
  }
  set hideToggle(value: boolean) {
    this._hideToggle = coerceBooleanProperty(value);
  }
  private _hideToggle = false;

  /** An event emitted after the body's expansion animation happens. */
  @Output() afterExpand = new EventEmitter<void>();
  /** An event emitted after the body's collapse animation happens. */
  @Output() afterCollapse = new EventEmitter<void>();

  /** Stream that emits for changes in `@Input` properties. */
  readonly _inputChanges = new Subject<SimpleChanges>();

  /** Optionally defined accordion the expansion panel belongs to. */
  accordion: AccordionDirective;

  /**
   * Content that will be rendered lazily.
   * @deprecated internal detail
   * TODO: Prefix with _
   */
  @ContentChild(ExpansionPanelContentDirective)
  lazyContent: ExpansionPanelContentDirective;

  /**
   * Element containing the panel's user-provided content.
   * @deprecated internal detail
   * TODO: Prefix with _
   */
  @ViewChild('body', { static: true }) body: ElementRef<HTMLElement>;

  /**
   * Portal holding the user's content.
   * @deprecated internal detail
   * TODO: Prefix with _
   */
  portal: TemplatePortal;

  /**
   * ID for the associated header element. Used for a11y labelling.
   * @deprecated internal detail
   * TODO: Prefix with _
   */
  headerId = `sbb-expansion-panel-header-${uniqueId++}`;

  /** Stream of body animation done events. */
  _bodyAnimationDone = new Subject<AnimationEvent>();

  private _document: Document;

  constructor(
    private _viewContainerRef: ViewContainerRef,
    @Optional() @SkipSelf() @Inject(SBB_ACCORDION) accordion: TypeRef<AccordionDirective>,
    changeDetectorRef: ChangeDetectorRef,
    uniqueSelectionDispatcher: UniqueSelectionDispatcher,
    @Inject(DOCUMENT) document?: any
  ) {
    super(accordion, changeDetectorRef, uniqueSelectionDispatcher);
    this.accordion = accordion;
    this._document = document;

    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._bodyAnimationDone
      .pipe(
        distinctUntilChanged((x, y) => {
          return x.fromState === y.fromState && x.toState === y.toState;
        })
      )
      .subscribe((event) => {
        if (event.fromState !== 'void') {
          if (event.toState === 'expanded') {
            this.afterExpand.emit();
          } else if (event.toState === 'collapsed') {
            this.afterCollapse.emit();
          }
        }
      });
  }

  /**
   * Gets the expanded state string.
   * @deprecated internal detail
   * TODO: Prefix with _
   */
  getExpandedState(): ExpansionPanelState {
    return this.expanded ? 'expanded' : 'collapsed';
  }

  ngAfterContentInit() {
    if (this.lazyContent) {
      // Render the content as soon as the panel becomes open.
      this.opened
        .pipe(
          startWith(null!),
          filter(() => this.expanded && !this.portal),
          take(1)
        )
        .subscribe(() => {
          this.portal = new TemplatePortal(this.lazyContent._template, this._viewContainerRef);
        });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this._inputChanges.next(changes);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this._bodyAnimationDone.complete();
    this._inputChanges.complete();
  }

  /** @deprecated No longer used */
  bodyAnimation() {}

  /**
   * Checks whether the expansion panel's content contains the currently-focused element.
   * @deprecated internal detail
   * TODO: Prefix with _
   */
  containsFocus(): boolean {
    if (this.body && this._document) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this.body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }

    return false;
  }

  // tslint:disable: member-ordering
  static ngAcceptInputType_hideToggle: BooleanInput;
  static ngAcceptInputType_expanded: BooleanInput;
  static ngAcceptInputType_disabled: BooleanInput;
  // tslint:enable: member-ordering
}
