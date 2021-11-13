import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardOutputComponent } from './card-output.component';


const routes: Routes = [
  {
    path : '',
    component: CardOutputComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardOutputRoutingModule { }
