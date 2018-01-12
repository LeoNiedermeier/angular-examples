import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RoutesDashboardComponent } from './routes-dashboard/routes-dashboard.component';
import { ChildExampleComponent, Child11Component, childExampleChildrenRoutes, Child12Component } from './child/child.component';
import { RouteParametersParentComponent } from './route-parameters-parent/route-parameters-parent.component';
import { RouteParametersChildComponent } from './route-parameters-child/route-parameters-child.component';

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
    RouteParametersChildComponent
  ]
})
export class RoutesModule {}
