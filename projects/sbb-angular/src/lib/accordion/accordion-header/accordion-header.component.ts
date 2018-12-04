import { FocusMonitor, FocusableOption, FocusOrigin } from '@angular/cdk/a11y';
import { ENTER, SPACE } from '@angular/cdk/keycodes';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { merge, Subscription, EMPTY } from 'rxjs';
import { filter } from 'rxjs/operators';
import { sbbExpansionAnimations } from '../accordion/accordion-animations';
import { SbbExpansionPanel } from '../accordion-panel/accordion-panel.component';


/**
 * `<mat-expansion-panel-header>`
 *
 * This component corresponds to the header element of an `<mat-expansion-panel>`.
 */
@Component({
  selector: 'sbb-expansion-panel-header',
  styleUrls: ['./accordion-header.component.scss'],
  templateUrl: './accordion-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    sbbExpansionAnimations.indicatorRotate,
    sbbExpansionAnimations.expansionHeaderHeight
  ],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    'class': 'sbb-expansion-panel-header',
    'role': 'button',
    '[attr.id]': 'panel._headerId',
    '[attr.tabindex]': 'disabled ? -1 : 0',
    '[attr.aria-controls]': '_getPanelId()',
    '[attr.aria-expanded]': '_isExpanded()',
    '[attr.aria-disabled]': 'panel.disabled',
    '[class.sbb-expanded]': '_isExpanded()',
    '(click)': '_toggle()',
    '(keydown)': '_keydown($event)',
    '[@expansionHeight]': `{
        value: _getExpandedState(),
        params: {
          collapsedHeight: collapsedHeight,
          expandedHeight: expandedHeight
        }
    }`,
  },
})
// tslint:disable-next-line:component-class-suffix
export class AccordionPanelHeader implements OnDestroy, FocusableOption {
  private _parentChangeSubscription = Subscription.EMPTY;

  constructor(
    @Host() public panel: SbbExpansionPanel,
    private _element: ElementRef,
    private _focusMonitor: FocusMonitor,
    private _changeDetectorRef: ChangeDetectorRef) {

    // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.
    this._parentChangeSubscription = merge(
      panel.opened,
      panel.closed,
      panel._inputChanges.pipe(filter(changes => !!(changes.disabled)))
    )
      .subscribe(() => this._changeDetectorRef.markForCheck());

    // Avoids focus being lost if the panel contained the focused element and was closed.
    panel.closed
      .pipe(filter(() => panel._containsFocus()))
      .subscribe(() => _focusMonitor.focusVia(_element.nativeElement, 'program'));

    _focusMonitor.monitor(_element.nativeElement).subscribe(origin => {
      if (origin && panel.accordion) {
        panel.accordion.handleHeaderFocus(this);
      }
    });
  }

  /** Height of the header while the panel is expanded. */
  @Input() expandedHeight: string;

  /** Height of the header while the panel is collapsed. */
  @Input() collapsedHeight: string;

  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }

  /** Toggles the expanded state of the panel. */
  _toggle(): void {
    this.panel.toggle();
  }

  /** Gets whether the panel is expanded. */
  _isExpanded(): boolean {
    return this.panel.expanded;
  }

  /** Gets the expanded state string of the panel. */
  _getExpandedState(): string {
    return this.panel._getExpandedState();
  }

  /** Gets the panel id. */
  _getPanelId(): string {
    return this.panel.id;
  }

  /** Gets whether the expand indicator should be shown. */
  _showToggle(): boolean {
    return !this.panel.disabled;
  }

  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event: KeyboardEvent) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        event.preventDefault();
        this._toggle();
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion.handleHeaderKeydown(event);
        }

        return;
    }
  }

  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin: FocusOrigin = 'program') {
    this._focusMonitor.focusVia(this._element.nativeElement, origin);
  }

  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element.nativeElement);
  }
}

/**
 * `<mat-panel-description>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'sbb-panel-description',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'sbb-expansion-panel-header-description'
  }
})
// tslint:disable-next-line:directive-class-suffix
export class SbbExpansionPanelDescription { }

/**
 * `<mat-panel-title>`
 *
 * This directive is to be used inside of the MatExpansionPanelHeader component.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'sbb-panel-title',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'sbb-expansion-panel-header-title'
  }
})
// tslint:disable-next-line:directive-class-suffix
export class SbbExpansionPanelTitle { }
