import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './Users-routing';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './number-only.directive';
import { reducer } from '../store/Reducer/users.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from '../store/Effects/user.effect';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({users:reducer}),
    EffectsModule.forRoot([UsersEffect])
  ],
  declarations: [UserListComponent, UserComponent, UserDetailComponent, NumberOnlyDirective]
})
export class UsersModule { }
