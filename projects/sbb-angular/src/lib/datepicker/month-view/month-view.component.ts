
import {
  DOWN_ARROW,
  END,
  ENTER,
  HOME,
  LEFT_ARROW,
  PAGE_DOWN,
  PAGE_UP,
  RIGHT_ARROW,
  UP_ARROW,
} from '@angular/cdk/keycodes';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  ViewEncapsulation,
  ViewChild,
  LOCALE_ID,
} from '@angular/core';
import { CalendarBodyComponent, CalendarCell } from '../calendar-body/calendar-body.component';
import { DateFormats, SBB_DATE_FORMATS } from '../date-formats';
import { DateAdapter } from '../date-adapter';
import { createMissingDateImplError } from '../datepicker-errors';
import { DateRange } from '../date-range';


const DAYS_PER_WEEK = 7;


@Component({
  selector: 'sbb-month-view',
  templateUrl: './month-view.component.html',
  exportAs: 'sbbMonthView',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonthViewComponent<D> implements AfterContentInit {

  /**
    * The date to display in this month view (everything other than the month and year is ignored).
    */
  @Input()
  get activeDate(): D { return this._activeDate; }
  set activeDate(value: D) {
    const oldActiveDate = this._activeDate;
    const validDate =
      this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
    this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
    if (!this.hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
      this.init();
    }
  }
  private _activeDate: D;

  /** The currently selected date. */
  @Input()
  get selected(): D | null { return this._selected; }
  set selected(value: D | null) {
    this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    this.selectedDate = this.getDateInCurrentMonth(this._selected);
  }
  private _selected: D | null;

  /** The minimum selectable date. */
  @Input()
  get minDate(): D | null { return this._minDate; }
  set minDate(value: D | null) {
    this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
  }
  private _minDate: D | null;

  /** The maximum selectable date. */
  @Input()
  get maxDate(): D | null { return this._maxDate; }
  set maxDate(value: D | null) {
    this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
  }
  private _maxDate: D | null;

  /** A function used to filter which dates are selectable. */
  @Input() dateFilter: (date: D) => boolean;

  @Input()
  dateRange: DateRange<D>;

  /** Emits when a new date is selected. */
  @Output() readonly selectedChange: EventEmitter<D | null> = new EventEmitter<D | null>();

  /** Emits when any date is selected. */
  @Output() readonly userSelection: EventEmitter<void> = new EventEmitter<void>();

  /** Emits when any date is activated. */
  @Output() readonly activeDateChange: EventEmitter<D> = new EventEmitter<D>();

  /** The body of calendar table */
  @ViewChild(CalendarBodyComponent) sbbCalendarBody: CalendarBodyComponent;

  /** The label for this month (e.g. "January 2017"). */
  monthLabel: string;

  /** Grid of calendar cells representing the dates of the month. */
  weeks: CalendarCell[][];

  /** The number of blank cells in the first row before the 1st of the month. */
  firstWeekOffset: number;

  /**
   * The date of the month that the currently selected Date falls on.
   * Null if the currently selected Date is in another month.
   */
  selectedDate: number | null;

  /** The date of the month that today falls on. Null if today is in another month. */
  todayDate: number | null;

  /** The names of the weekdays. */
  weekdays: { long: string, narrow: string }[];

  constructor(private changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(SBB_DATE_FORMATS) private dateFormats: DateFormats,
    @Optional() public dateAdapter: DateAdapter<D>,
    @Inject(LOCALE_ID) public locale: string) {

    if (!this.dateAdapter) {
      throw createMissingDateImplError('DateAdapter');
    }
    if (!this.dateFormats) {
      throw createMissingDateImplError('MAT_DATE_FORMATS');
    }

    const firstDayOfWeek = this.dateAdapter.getFirstDayOfWeek();
    const narrowWeekdays = this.dateAdapter.getDayOfWeekNames('narrow');
    const longWeekdays = this.dateAdapter.getDayOfWeekNames('long');

    // Rotate the labels for days of the week based on the configured first day of the week.
    const weekdays = longWeekdays.map((long, i) => {
      return { long, narrow: narrowWeekdays[i] };
    });
    this.weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));

    this._activeDate = this.dateAdapter.today();
  }

  ngAfterContentInit() {
    this.init();
  }

  /** Handles when a new date is selected. */
  dateSelected(date: number) {
    if (this.selectedDate !== date) {
      const selectedYear = this.dateAdapter.getYear(this.activeDate);
      const selectedMonth = this.dateAdapter.getMonth(this.activeDate);
      const selectedDate = this.dateAdapter.createDate(selectedYear, selectedMonth, date);

      this.selectedChange.emit(selectedDate);
    }

    this.userSelection.emit();
  }

  /** Handles keydown events on the calendar body when calendar is in month view. */
  handleCalendarBodyKeydown(event: KeyboardEvent): void {
    const oldActiveDate = this._activeDate;

    switch (event.keyCode) {
      case LEFT_ARROW:
        this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, -1);
        break;
      case RIGHT_ARROW:
        this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 1);
        break;
      case UP_ARROW:
        this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, -7);
        break;
      case DOWN_ARROW:
        this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 7);
        break;
      case HOME:
        this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate,
          1 - this.dateAdapter.getDate(this._activeDate));
        break;
      case END:
        this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate,
          (this.dateAdapter.getNumDaysInMonth(this._activeDate) -
            this.dateAdapter.getDate(this._activeDate)));
        break;
      case PAGE_UP:
        this.activeDate = event.altKey ?
          this.dateAdapter.addCalendarYears(this._activeDate, -1) :
          this.dateAdapter.addCalendarMonths(this._activeDate, -1);
        break;
      case PAGE_DOWN:
        this.activeDate = event.altKey ?
          this.dateAdapter.addCalendarYears(this._activeDate, 1) :
          this.dateAdapter.addCalendarMonths(this._activeDate, 1);
        break;
      case ENTER:
        if (!this.dateFilter || this.dateFilter(this._activeDate)) {
          this.dateSelected(this.dateAdapter.getDate(this._activeDate));
          this.userSelection.emit();
          // Prevent unexpected default actions such as form submission.
          event.preventDefault();
        }
        return;
      default:
        // Don't prevent default or focus active cell on keys that we don't explicitly handle.
        return;
    }

    if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
      this.activeDateChange.emit(this.activeDate);
    }

    this.focusActiveCell();
    // Prevent unexpected default actions such as form submission.
    event.preventDefault();
  }

  /** Initializes this month view. */
  init() {
    this.selectedDate = this.getDateInCurrentMonth(this.selected);
    this.todayDate = this.getDateInCurrentMonth(this.dateAdapter.today());
    this.monthLabel =
      this.dateAdapter.getMonthNames('short')[this.dateAdapter.getMonth(this.activeDate)]
        .toLocaleUpperCase();

    const firstOfMonth = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate),
      this.dateAdapter.getMonth(this.activeDate), 1);
    this.firstWeekOffset =
      (DAYS_PER_WEEK + this.dateAdapter.getDayOfWeek(firstOfMonth) -
        this.dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

    this.createWeekCells();
    this.changeDetectorRef.markForCheck();
  }

  /** Focuses the active cell after the microtask queue is empty. */
  focusActiveCell() {
    this.sbbCalendarBody.focusActiveCell();
  }

  private isRangeLimit(date: D) {
    if (this.dateAdapter.compareDate(date, this.dateRange.begin) === 0) {
      return 'begin';
    }
    if (this.dateAdapter.compareDate(date, this.dateRange.end) === 0) {
      return 'end';
    }
    return null;
  }

  /** Creates MatCalendarCells for the dates in this month. */
  private createWeekCells() {
    const daysInMonth = this.dateAdapter.getNumDaysInMonth(this.activeDate);
    const dateNames = this.dateAdapter.getDateNames();
    this.weeks = [[]];
    for (let i = 0, cell = this.firstWeekOffset; i < daysInMonth; i++ , cell++) {
      if (cell === DAYS_PER_WEEK) {
        this.weeks.push([]);
        cell = 0;
      }
      const date = this.dateAdapter.createDate(
        this.dateAdapter.getYear(this.activeDate),
        this.dateAdapter.getMonth(this.activeDate), i + 1);
      const enabled = this.shouldEnableDate(date);
      const rangeBackground = this.shouldApplyRangeBackground(date);
      this.weeks[this.weeks.length - 1]
        .push(new CalendarCell(i + 1, dateNames[i], enabled, rangeBackground));
    }
  }

  private shouldApplyRangeBackground(date): string | null {
    if (this.dateRange && this.dateRange.begin && this.dateRange.end) {
      if (this.dateAdapter.compareDate(date, this.dateRange.begin) > 0 &&
        this.dateAdapter.compareDate(date, this.dateRange.end) < 0) {
        return 'range';
      }
      return this.isRangeLimit(date);
    }
    return null;
  }

  /** Date filter for the month */
  private shouldEnableDate(date: D): boolean {
    return !!date &&
      (!this.dateFilter || this.dateFilter(date)) &&
      (!this.minDate || this.dateAdapter.compareDate(date, this.minDate) >= 0) &&
      (!this.maxDate || this.dateAdapter.compareDate(date, this.maxDate) <= 0);
  }

  /**
   * Gets the date in this month that the given Date falls on.
   * Returns null if the given Date is in another month.
   */
  private getDateInCurrentMonth(date: D | null): number | null {
    return date && this.hasSameMonthAndYear(date, this.activeDate) ?
      this.dateAdapter.getDate(date) : null;
  }

  /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
  private hasSameMonthAndYear(d1: D | null, d2: D | null): boolean {
    return !!(d1 && d2 && this.dateAdapter.getMonth(d1) === this.dateAdapter.getMonth(d2) &&
      this.dateAdapter.getYear(d1) === this.dateAdapter.getYear(d2));
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a date instance and valid, otherwise null.
   */
  private getValidDateOrNull(obj: any): D | null {
    return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
  }

}
