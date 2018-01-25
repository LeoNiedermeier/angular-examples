import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class TestObservableService {
  constructor() {}

  doSomething(argument: string): Observable<string> {
    return Observable.of('Observable:' + argument).delay(1000);
  }
}
