import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  templateUrl: './ng-for-example.component.html'
})
export class NgForExampleComponent implements OnInit {
  rows: Row[];
  constructor() {}

  ngOnInit() {
    this.rows = [];
    for (let i = 10; i < 20; i++) {
      this.rows.push(new Row(i * 2, `value ${i}`));
    }
  }

  trackById(index: number, row: Row): number {
    return row.id;
  }
}

export class Row {
  constructor(public readonly id: number, public readonly value: string) {}
}
