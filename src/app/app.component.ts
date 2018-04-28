import {Component, OnInit} from '@angular/core';

import {SpinnerOptions} from 'spin.js';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public spinnerOptions: SpinnerOptions;
  public spin: boolean;
  public smallSpin: boolean;

  constructor() {
  }

  ngOnInit() {
    this.spinnerOptions = {
      lines: 12,
      length: 16,
      width: 5,
      radius: 16,
      scale: 0.8,
      corners: 1,
      rotate: 90,
      direction: 1,
      color: '#444444',
      speed: 1.5,
      trail: 80,
      shadow: 'none',
      className: 'spinner',
      zIndex: 2e9,
      top: '30%',
      left: '50%',
      position: 'absolute'
    };
  }

  showSpinner() {
    this.spin = true;
    setTimeout(() => {
      this.spin = false;
    }, 5000);
  }

  smallSpinner() {
    this.smallSpin = true;
    setTimeout(() => {
      this.smallSpin = false;
    }, 5000);
  }

  onUpdate(event) {
    console.log(event ? 'Spinner Running' : 'Spinner Stopped');
  }
}
