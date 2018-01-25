import {Injectable} from '@angular/core';

@Injectable()
export class TestService {

  constructor() {}

  doSomething(argument: string): string {
    return 'doSomething:' + argument;
  }
}
