import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { User } from "src/app/core/models/user";
import { Observable } from "rxjs";
import { GET_USER_LIST, GetUserListSuccess, GET_USER, GetUserSuccess, DeleteUserSuccess, DELETE_USER, SUBMIT_NEW_USER, NewUserSubmit, NewUserSucess, USER_EDIT, UserEditSucess } from "../Action/user.actions"
import { catchError, concatMap, exhaustMap, map, mergeMap } from "rxjs/operators";
import { EmployeeService } from 'src/app/core/service/employee.service';
import { GlobalConstants } from 'src/app/includes/common';
@Injectable()
export class UsersEffect {
  constructor(private _actions$: Actions, private _employeeService: EmployeeService) { }
  @Effect()
  UserData$: Observable<any> =
    this._actions$.pipe(
      ofType(GET_USER_LIST),
      exhaustMap((payload: any) => {
        return this._employeeService.getEmployeeList(GlobalConstants.API_SLUG, payload.page, payload.limit)
          .pipe(
            map((response) => {
              return new GetUserListSuccess(response);
            }),
            catchError((err) => {
              return 'Something Went Wrong !!!';
            })
          )
      })
    )

  @Effect()
  SingleUserData$: Observable<any> =
    this._actions$.pipe(
      ofType(GET_USER),
      exhaustMap((payload: any) => {
        return this._employeeService.getSingleEmployee(GlobalConstants.API_SLUG, payload.id)
          .pipe(
            map((response) => {
              return new GetUserSuccess(response);
            }),
            catchError((err) => {
              return 'Something Went Wrong !!!';
            })
          )
      })
    )

  @Effect()
  DeleteUserData$: Observable<any> =
    this._actions$.pipe(
      ofType(DELETE_USER),
      mergeMap((payload: any) => {
        return this._employeeService.deleteEmployee(GlobalConstants.API_SLUG, payload.id)
          .pipe(
            map(() => {
              return new DeleteUserSuccess(payload.id);
            }),
            catchError((err) => {
              return 'Something Went Wrong !!!';
            })
          )
      })
    )
  @Effect()
  CreateUserData$: Observable<any> =
    this._actions$.pipe(
      ofType(SUBMIT_NEW_USER),
      concatMap((payload: any) => {
        return this._employeeService.newEmployee(GlobalConstants.API_SLUG, payload.user)
          .pipe(
            map((response) => {
              return new NewUserSucess(response);
            }),
            catchError((err) => {
              return 'Something Went Wrong !!!';
            })
          )
      })
    )

    @Effect()
  EditUserData$: Observable<any> =
    this._actions$.pipe(
      ofType(USER_EDIT),
      concatMap((payload:any)=>{
        return this._employeeService.editEmployee(GlobalConstants.API_SLUG, payload.user.id,payload.user)
          .pipe(
            map((response) => {
              return new UserEditSucess(response);
            }),
            catchError((err) => {
              return 'Something Went Wrong !!!';
            })
          )
      })
    )
}