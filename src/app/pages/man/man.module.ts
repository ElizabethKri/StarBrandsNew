import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManRoutingModule } from './man-routing.module';
import { ManItemComponent } from './man-item/man-item.component';


@NgModule({
  declarations: [
    ManItemComponent
  ],
  imports: [
    CommonModule,
    ManRoutingModule
  ]
})
export class ManModule { }
