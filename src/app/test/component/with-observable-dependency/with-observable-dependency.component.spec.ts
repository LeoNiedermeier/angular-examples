/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithObservableDependencyComponent } from './with-observable-dependency.component';
import { TestObservableService } from './test-observable.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

fdescribe('WithObservableDependencyComponent', () => {
  let component: WithObservableDependencyComponent;
  let fixture: ComponentFixture<WithObservableDependencyComponent>;

  let nativeElement: HTMLElement;

  beforeEach(
    async(() => {
      const testService = {
        doSomething: (x: string) => Observable.of('abc')
      };

      TestBed.configureTestingModule({
        declarations: [WithObservableDependencyComponent],
        providers: [{ provide: TestObservableService, useValue: testService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WithObservableDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 fit('should use observavle', () => {
    expect(nativeElement.querySelector('p').textContent).toBe('abc');
  });

});
