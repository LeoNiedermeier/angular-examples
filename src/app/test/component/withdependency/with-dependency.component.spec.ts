import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WithDependencyComponent } from './with-dependency.component';
import { TestService } from './test.service';

describe('WithDependencyComponent', () => {
  // siehe auch https://angular.io/guide/testing#test-a-component-with-a-dependency
  let component: WithDependencyComponent;
  let fixture: ComponentFixture<WithDependencyComponent>;
  let nativeElement: HTMLElement;
  beforeEach(
    async(() => {
      const testServiceStub = {
        doSomething: (x: string) => 'Test:' + x
      };

      TestBed.configureTestingModule({
        declarations: [WithDependencyComponent],
        // der Service wird nicht im Original provided, stattdessen wird
        // ein value provider mit einem Stub benutzt.
        providers: [
          {
            provide: TestService,
            useValue: testServiceStub
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use dependent service (stub)', () => {

    expect(nativeElement.querySelector('p').textContent).toBe('Test:newValue');
  });
});
