import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { DirectivesDashboardComponent } from './directives-dashboard/directives-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';

const directivesRoutes: Routes = [
  {
    path: 'directives',
    component: DirectivesDashboardComponent,
    children: [
      {
        path: 'ng-for',
        component: NgForExampleComponent
      },
      {
        path: 'ng-if',
        component: NgIfExampleComponent
      },
      {
        path: 'ng-switch',
        component: NgSwitchExampleComponent
      }
    ]
  }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(directivesRoutes)],
  declarations: [NgForExampleComponent, DirectivesDashboardComponent, NgIfExampleComponent, NgSwitchExampleComponent],
  exports: [DirectivesDashboardComponent]
})
export class DirectivesModule {}
