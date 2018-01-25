
import {InOutTestComponent} from './component/inout/in-out-test.component';
import {WithDependencyComponent} from './component/withdependency/with-dependency.component';
import {NgModule} from '@angular/core';
import {withModule} from '@angular/core/testing';
import { CommonModule } from '@angular/common/src/common_module';
import { WithObservableDependencyComponent } from './component/with-observable-dependency/with-observable-dependency.component';
@NgModule(
  {
    imports: [CommonModule],
    declarations: [InOutTestComponent, WithDependencyComponent, WithObservableDependencyComponent]
  })
export class TestModule {

}
