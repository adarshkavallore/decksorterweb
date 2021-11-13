import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardInputComponent } from './card-input/card-input.component';


const routes: Routes = [
  {
    path : '',
    component: CardInputComponent
  },
  {
    path: 'result',
    loadChildren: () => import('./card-output/card-output.module').then(m => m.CardOutputModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
