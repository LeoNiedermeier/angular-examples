import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InOutTestComponent} from './in-out-test.component';

describe('InOutTestComponent', () => {
  let component: InOutTestComponent;
  let fixture: ComponentFixture<InOutTestComponent>;

  // nativeElement wird nicht automatisch genereiert, ist aber praktisch
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InOutTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should react on click', () => {
    // typischer test für click:
    // Am output EventEmitter registrieren, um den event abzufangen
    let event: any;
    component.myOutput.subscribe(b => event = b);

    // Den button clicken: selector über query. 
    // Eventuell macht es Sinn, html Elemente mit einer ID zu versehen
    nativeElement.querySelector('button').click();

    // Den Event überprüfen
    expect(event).toBe(true);

  });

  it('should show input', () => {
    // Typischer test für Input
    // Wert zuweisen
    component.myInputText = 'test input';

    // Ganz wichtig!! change detection triggern
    fixture.detectChanges();

    // das Html überprüfen

    expect(nativeElement.querySelector('p').textContent).toContain('test input');

  });
});
