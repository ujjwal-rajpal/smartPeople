import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersModule } from './users/users.module';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => UsersModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }