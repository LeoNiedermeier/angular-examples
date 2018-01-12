import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html'
})
export class NgIfExampleComponent implements OnInit {
  show = false;

  constructor() {}

  toggle() {
    this.show = !this.show;
  }
  ngOnInit() {}
}
