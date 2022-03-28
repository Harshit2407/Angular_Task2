import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveformRoutingModule } from './reactiveform-routing.module';
import { ReactiveformComponent } from './reactiveform.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveformComponent
  ],
  imports: [
    CommonModule,
    ReactiveformRoutingModule,
    FormsModule,ReactiveFormsModule

  ]
})
export class ReactiveformModule { }
