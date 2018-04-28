import {Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges} from '@angular/core';

import {Spinner, SpinnerOptions} from 'spin.js';

@Component({
  selector: 'ngx-spinjs',
  template: '<div [class.overlay-loader]="backdrop" [style.display]="show === true ? \'inherit\' : \'none\'"></div>',
  styleUrls: ['./ngx-spinjs.component.css']
})
export class NgxSpinjsComponent implements OnDestroy, OnChanges {
  /**
   * backdrop
   */
  @Input() backdrop: boolean;
  /**
   * options to merge
   */
  @Input() options: SpinnerOptions = {};
  /**
   * Spinner Active or not
   */
  @Input() toggleSpinner: boolean;

  /**
   * Spin Update Event
   */
  @Output() spinUpdate = new EventEmitter<boolean>();

  /**
   * Controls visibility via
   * style.display
   */
  public show = false;
  /**
   * Holds SpinJS
   */
  private spinner: Spinner;

  constructor(private element: ElementRef) {
  }

  /**
   * Reset Spinner
   */
  ngOnDestroy() {
    this.spinner = null;
  }

  /**
   * Build Spinner onInit
   * [toggleSpinner] boolean
   */
  ngOnChanges(changes: SimpleChanges) {
    if (changes.toggleSpinner) {
      if (changes.toggleSpinner.isFirstChange()) {
        this.initSpinner();
      }

      if (changes.toggleSpinner.currentValue) {
        this.startSpin();
      } else {
        this.stopSpin();
      }
    }
  }

  /**
   * Merge options [options]
   * Build Spinner
   */
  private initSpinner() {
    const options = {
      lines: this.options.lines ? this.options.lines : 12,  // The number of lines to draw
      length: this.options.length ? this.options.length : 16, // The length of each line
      width: this.options.width ? this.options.width : 5, // The line thickness
      radius: this.options.radius ? this.options.radius : 16, // The radius of the inner circle
      scale: this.options.scale ? this.options.scale : 0.8, // Scales overall size of the ngx-spinjs
      corners: this.options.corners ? this.options.corners : 1, // Corner roundness (0..1)
      rotate: this.options.rotate ? this.options.rotate : 0, // The rotation offset
      direction: this.options.direction ? this.options.direction : 1, // 1: clockwise, -1: counterclockwise
      color: this.options.color ? this.options.color : '#444444', // #rgb or #rrggbb or array of colors
      speed: this.options.speed ? this.options.speed : 1.5, // Rounds per second
      trail: this.options.trail ? this.options.trail : 80, // Afterglow percentage
      shadow: this.options.shadow ? this.options.shadow : 'none', // Whether to render a shadow
      className: this.options.className ? this.options.className : 'spinner', // The CSS class to assign to the ngx-spinjs
      zIndex: this.options.zIndex ? this.options.zIndex : 2e9, // The z-index (defaults to 2000000000)
      top: this.options.top ? this.options.top : '50%', // Top position relative to parent
      left: this.options.left ? this.options.left : '50%', // Left position relative to parent
      position: this.options.position ? this.options.position : 'absolute' // Element Positioning
    };
    this.spinner = new Spinner(options);
  }

  /**
   * Show Spinner div
   * Start SpinJS
   * $emit update
   */
  private startSpin() {
    this.show = true;
    this.spinner.spin(this.element.nativeElement);
    this.spinUpdate.next(true);
  }

  /**
   * Hide Spinner div
   * Stop SpinJS
   * $emit update
   */
  private stopSpin() {
    this.show = false;
    this.spinner.stop();
    this.spinUpdate.next(false);
  }
}
