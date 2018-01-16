import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsDashboardComponent } from './components/components-dashboard/components-dashboard.component';
import { ComponentsModule } from './components/components.module';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesDashboardComponent } from './directives/directives-dashboard/directives-dashboard.component';
import { DirectivesModule } from './directives/directives.module';
import { RoutesModule } from './routes/routes.module';
import { ReactiveFormsExampleModule } from './forms/reactive-forms-example/reactive-forms-example.module';
import { ReactiveFormsExampleComponent } from './forms/reactive-forms-example/reactive-forms-example.component';

const appRoutes: Routes = [
  {
    path: 'forms/reactive',
    component: ReactiveFormsExampleComponent
  },
  {
    path: 'directives',
    component: DirectivesDashboardComponent
  },
  // redirect unknown to the homepage
  // wildcard must be last in the list of routes
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    ComponentsModule,
    DirectivesModule,
    RoutesModule,
    ReactiveFormsExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
