import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html'
})
export class InOutComponent implements OnInit {

  // an input attribute with the name of the property name (myInputText in this case)
  // of course, can be any kind of object
  @Input()
  myInputText = 'default';

  // can output any type
  @Output()
  myOutput = new EventEmitter<boolean>();
  constructor() {}

  buttonClicked() {
    this.myOutput.emit(true);
  }

  ngOnInit() {
  }

}
