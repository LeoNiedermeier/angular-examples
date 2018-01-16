import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsExampleComponent } from './reactive-forms-example.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ReactiveFormsExampleComponent]
})
export class ReactiveFormsExampleModule {}
