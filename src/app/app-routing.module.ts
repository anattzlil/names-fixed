import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { ListComponent } from './list/list.component';
import { ExtendedComponent } from './extended/extended.component';


const routes: Routes = [
  {path:'', component: ListComponent},
  {path:'people/:id', component: ExtendedComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }