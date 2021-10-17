import { Action } from '@ngrx/store';
import { User } from '../../core/models/user';

export const CREATE_USER = 'User_Create';
export const DELETE_USER = 'User_Delete';
export const GET_USER_LIST = 'UserList_Get';
export const GET_USER_LIST_SUCESS = 'UserList_Get_Sucess';


export class CreateUser implements Action {
    readonly type = CREATE_USER;

    constructor(public payload: User) { }
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;

    constructor(public id: number) { }
}
export class GetUserList implements Action {
    readonly type = GET_USER_LIST;
    constructor(public page: number, public limit: number) { }
}

export class GetUserListSuccess implements Action{
    public readonly type = GET_USER_LIST_SUCESS;
    constructor(public payload: any){}
  }

export type Actions = CreateUser | DeleteUser | GetUserList | GetUserListSuccess ;
