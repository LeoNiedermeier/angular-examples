import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-text',
  templateUrl: './simple-text.component.html',
})
export class SimpleTextComponent {

  myText = 'Text from property of component class';
  constructor() {}

}
