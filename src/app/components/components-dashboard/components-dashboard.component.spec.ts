import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDashboardComponent } from './components-dashboard.component';

describe('ComponentsDashboardComponent', () => {
  let component: ComponentsDashboardComponent;
  let fixture: ComponentFixture<ComponentsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
