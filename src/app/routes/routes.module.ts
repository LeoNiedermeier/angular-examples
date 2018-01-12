import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RoutesDashboardComponent } from './routes-dashboard/routes-dashboard.component';
import { Child1Component, Child11Component, child1Routes } from './child/child.component';

const routerRoutes: Routes = [
  {
    path: 'routes',
    component: RoutesDashboardComponent,
    children: [
      {
        path: 'child-1',
        component: Child1Component,
        children: child1Routes
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routerRoutes)],
  exports: [RouterModule],
  declarations: [RoutesDashboardComponent, Child1Component, Child11Component]
})
export class RoutesModule {}
