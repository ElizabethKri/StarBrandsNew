import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManRoutingModule } from './man-routing.module';
import { ManListComponent } from './man-list/man-list.component';


@NgModule({
  declarations: [
    ManListComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule
  ]
})
export class ManModule { }
