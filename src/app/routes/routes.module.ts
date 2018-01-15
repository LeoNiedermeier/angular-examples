import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, Router } from '@angular/router';
import { RoutesDashboardComponent } from './routes-dashboard/routes-dashboard.component';
import { ChildExampleComponent, Child11Component, childExampleChildrenRoutes, Child12Component } from './child/child.component';
import { RouteParametersParentComponent } from './route-parameters-parent/route-parameters-parent.component';
import { RouteParametersChildComponent } from './route-parameters-child/route-parameters-child.component';

import { RouteGuardsParentComponent } from './route-guards/route-guards-parent.component';
import { CanActivateExample } from './route-guards/CanActivateExample';
import { RouteGuardsChildComponent } from './route-guards/route-guards-child.component';
import { RouteResolveComponent } from './route-resolve/route-resolve.component';
import { ExampleDataResolver } from './route-resolve/example-data-resolver.service';

const routerRoutes: Routes = [
  {
    path: 'routes',
    component: RoutesDashboardComponent,
    children: [
      {
        path: 'child-example',
        component: ChildExampleComponent,
        children: childExampleChildrenRoutes
      },
      {
        path: 'route-parameters',
        component: RouteParametersParentComponent,
        children: [
          {
            path: 'parameter/:id',
            component: RouteParametersChildComponent
          }
        ]
      },
      {
        path: 'route-guard',
        component: RouteGuardsParentComponent,
        children: [
          {
            path: 'guarded',
            component: RouteGuardsChildComponent,
            // falls man alle Children 'canActivate' prüfen möchte, kann man im parent canActivateChild verwenden.
            canActivate: [CanActivateExample],
            // Da wir auf einen Query Parameter prüfen, muss der Guard speziell konfiguriert werden:
            runGuardsAndResolvers: 'paramsOrQueryParamsChange'
          }
        ]
      },
      {
        path: 'route-resolve/:id',
        component: RouteResolveComponent,
        resolve: {
          exampleData: ExampleDataResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routerRoutes), CommonModule],
  exports: [RouterModule],
  declarations: [
    RoutesDashboardComponent,
    ChildExampleComponent,
    Child11Component,
    Child12Component,
    RouteParametersParentComponent,
    RouteParametersChildComponent,
    RouteGuardsParentComponent,
    RouteGuardsChildComponent,
    RouteResolveComponent
  ],
  providers: [CanActivateExample, ExampleDataResolver]
})
export class RoutesModule {}
