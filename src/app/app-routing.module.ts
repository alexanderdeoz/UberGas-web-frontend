import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',//inicio de uber Gas
    component: MainComponent
  },
  {
    path: 'ubergas',
    component: MainComponent
  },
  {
    path: 'not-found',//Componente no encontrado 
    component: NotFoundComponent
  },
  {
    path: '**', //componente no encontrado 
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
