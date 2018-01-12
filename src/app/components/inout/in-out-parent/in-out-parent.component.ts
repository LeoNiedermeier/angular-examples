import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-in-out-parent',
  templateUrl: './in-out-parent.component.html'
})
export class InOutParentComponent implements OnInit {

  childButtonClickedNumber = 0;

  textForInput = 'Button not clicked';

  constructor() {}

  ngOnInit() {
  }

  childButtonClicked(event: boolean) {
    this.childButtonClickedNumber++;
    // template string with back-ticks and reference to variable with ${}
    this.textForInput = `Button clicked: ${this.childButtonClickedNumber}`;
  }
}
