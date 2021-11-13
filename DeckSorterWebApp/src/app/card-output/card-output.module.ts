import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardOutputComponent } from './card-output.component';
import { CardOutputRoutingModule } from './card-output-routing.module';



@NgModule({
  declarations: [CardOutputComponent],
  imports: [
    CommonModule,
    CardOutputRoutingModule
  ]
})
export class CardOutputModule { }
