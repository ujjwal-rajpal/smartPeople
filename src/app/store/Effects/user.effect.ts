import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { User } from "src/app/core/models/user";
import { Observable } from "rxjs";
import {  GET_USER_LIST, GetUserListSuccess } from "../action/user.actions"
import { catchError, exhaustMap, map, mergeMap } from "rxjs/operators";
import { EmployeeService } from 'src/app/core/service/employee.service';
import { GlobalConstants } from 'src/app/includes/common';
@Injectable()
export class UsersEffect{
    constructor( private _actions$: Actions, private _employeeService: EmployeeService){}
  @Effect()
  UserData$: Observable<any> =
    this._actions$.pipe(
      ofType(GET_USER_LIST),
      exhaustMap((payload:any)=>{
        return this._employeeService.getEmployeeList(GlobalConstants.API_SLUG,payload.page, payload.limit)
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
}