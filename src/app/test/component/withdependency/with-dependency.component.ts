import {Component, OnInit} from '@angular/core';
import { TestService } from './test.service';

@Component({
  template: `<p>{{initialValue}}</p>`
})
export class WithDependencyComponent implements OnInit {

  initialValue = 'init';
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.initialValue = this.testService.doSomething('newValue');
  }

}
