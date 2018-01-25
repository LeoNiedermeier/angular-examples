import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  template:
  ` <p>{{myInputText}}</p>
    <button  (click)="buttonClicked()">Click Child Button</button>`
})
export class InOutTestComponent implements OnInit {

  // an input attribute with the name of the property name (myInputText in this case)
  // of course, can be any kind of object
  @Input()
  myInputText = 'default';

  // can output any type
  // can also be void
  @Output()
  myOutput = new EventEmitter<boolean>();
  constructor() {}

  buttonClicked() {
    this.myOutput.emit(true);
  }

  ngOnInit() {
  }

}
