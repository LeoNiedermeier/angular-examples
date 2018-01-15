import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<p>Route Resolve Component: {{title}}</p>`
})
export class RouteResolveComponent implements OnInit {
  title: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: { exampleData: string }) => {
      console.log(data);
      this.title = data.exampleData;
    });
  }
}
