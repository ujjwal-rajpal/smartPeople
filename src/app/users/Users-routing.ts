import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
const routes: Routes=[
  {
    path: "", 
    redirectTo:'/users', 
    pathMatch: 'full'
  }, 
  {
    path:'users', 
    component:UserComponent
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }