import { Component, OnInit } from '@angular/core';

class Entry {

  value: string;
  next: Entry;

  create(value: string): Entry {
    const entry = new Entry();
    entry.value = value;
    this.next = entry;
    return entry;
  }
}
class Cases {
  static readonly   FIRST = 'First';
  static readonly   SECOND = 'SECOND';
  static readonly   THIRD = 'THIRD';
}

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html'
})
export class NgSwitchExampleComponent implements OnInit {

  // Template kann nur auf Properties der Komponente zugreifen, daher muss man auch eine Property für die statics definieren.
  // Man beachte den Syntax. Es wird kein Konstruktor aufgerufern.
  readonly cases = Cases;
  entries: Entry;
  currentValue: Entry;
  constructor() { }

  ngOnInit() {
    this.entries = new Entry();
    this.entries.value = Cases.FIRST;
    const last =   this.entries.create(Cases.SECOND).create(Cases.THIRD);
    last.next = this.entries;
    this.currentValue = this.entries;
  }

  doSwitch() {
    this.currentValue = this.currentValue.next;
  }

}
