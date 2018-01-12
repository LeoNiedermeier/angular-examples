import { NgModule } from '@angular/core';
import { SimpleTextComponent } from './simple-text/simple-text.component';
import { ComponentsDashboardComponent } from './components-dashboard/components-dashboard.component';
import { InOutParentComponent } from './inout/in-out-parent/in-out-parent.component';
import { InOutComponent } from './inout/in-out/in-out.component';
import { RouterModule, Routes } from '@angular/router';

const componentsRoutes: Routes = [
  {
    path: 'components',
    component: ComponentsDashboardComponent,
    children: [
      {
        path: 'simple-text',
        component: SimpleTextComponent
      },
      {
        path: 'inout',
        component: InOutParentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(componentsRoutes)],
  declarations: [SimpleTextComponent, ComponentsDashboardComponent, InOutParentComponent, InOutComponent],
  exports: [RouterModule]
})
export class ComponentsModule {}
