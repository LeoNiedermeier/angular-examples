import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-route-parameters-child',
  templateUrl: './route-parameters-child.component.html'
})
export class RouteParametersChildComponent implements OnInit {
  idFromSnapshot: string;

  idFromObservable: Observable<String>;
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    // holt den Parameter direkt aus dem Snapshot,
    // das wird nicht aktualisiert, fals das selbe Template mit einem anderen Parameter gerendert wird.
    this.idFromSnapshot = this.route.snapshot.paramMap.get('id');

    // via Observable findet auch eine Aktualisierung statt, falls nur andere Parameter Werte kommen.
    this.idFromObservable = this.route.paramMap.switchMap((params: ParamMap) => {
      const id = params.get('id');
      return Observable.interval(1000).map(x => `Parameter ${id} Counter ${x}`);
    });
  }
}
