import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutParentComponent } from './in-out-parent.component';

describe('InOutParentComponent', () => {
  let component: InOutParentComponent;
  let fixture: ComponentFixture<InOutParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
