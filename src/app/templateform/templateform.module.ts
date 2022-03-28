import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TemplateformRoutingModule } from './templateform-routing.module';
import { TemplateformComponent } from './templateform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateformComponent
  ],
  imports: [
    CommonModule,
    TemplateformRoutingModule,
    FormsModule
  ]
})
export class TemplateformModule { }
