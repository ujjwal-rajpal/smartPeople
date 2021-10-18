import { Action } from '@ngrx/store';
import { User } from '../../core/models/user';

export const CREATE_USER = 'User_Create';
export const DELETE_USER = 'User_Delete';
export const DELETE_USER_SUCCESS = 'User_Delete_Sucess';
export const GET_USER_LIST = 'UserList_Get';
export const GET_USER_LIST_SUCESS = 'UserList_Get_Sucess';
export const GET_USER = 'User_Get';
export const GET_USER_SUCESS = 'User_Get_Sucess';
export const OPERATION = 'OPERATION';
export const SUBMIT_NEW_USER = 'USER_NEW_SUBMIT';
export const NEW_USER_SUCESS = 'User_New_Sucess';

export class GetUserList implements Action {
    readonly type = GET_USER_LIST;
    constructor(public page: number, public limit: number) { }
}

export class GetUserListSuccess implements Action{
    public readonly type = GET_USER_LIST_SUCESS;
    constructor(public payload: any){}
  }
  export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public id: number) { }
}

export class GetUserSuccess implements Action{
    public readonly type = GET_USER_SUCESS;
    constructor(public payload: any){}
  }

export class DeleteUser implements Action {
    readonly type = DELETE_USER;

    constructor(public id: number) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = DELETE_USER_SUCCESS;

    constructor(public id: number) { }
}

export class Operation implements Action{
    readonly type = OPERATION;
    constructor(public op: string){}
}

export class NewUserSubmit implements Action{
    readonly type = SUBMIT_NEW_USER;
    constructor(public user: any){}
}

export class NewUserSucess implements Action{
    readonly type = NEW_USER_SUCESS;
    constructor(public user: any){}
}
export type Actions =  DeleteUser | DeleteUserSuccess | GetUserList | GetUserListSuccess | GetUser |GetUserSuccess | Operation | NewUserSubmit | NewUserSucess;
