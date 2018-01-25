import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TestObservableService } from './test-observable.service';
@Component({
  template: `<p>{{value | async}}<p>`
})
export class WithObservableDependencyComponent implements OnInit {
  value: Observable<string>;
  constructor(private testService: TestObservableService) {}

  ngOnInit() {
    this.value = this.testService.doSomething('init');
  }
}
