import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { DeleteUser,  GetUser, GetUserList, Operation } from 'src/app/store/Action/user.actions';
import { User } from 'src/app/core/models/user';
import { USER_LIST_SELECTOR } from 'src/app/store/Selector/user.selector';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { UserDetailComponent } from '../user-detail/user-detail.component';
import {MatSnackBar,  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
  import { EmployeeService } from 'src/app/core/service/employee.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'email', 'phone', 'action'];
  dataSource = []
  employeListSUbscription: Subscription;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _store: Store<User>,
    private _router: Router,
    private _route: ActivatedRoute,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _employees: EmployeeService
    ) { }
  ngOnInit() {
    this.getEmployeeList(1, 15);
    this._store.pipe(select(USER_LIST_SELECTOR)).subscribe(data => {
      if (data) {
        let employee = data;
        this.dataSource = employee['users']['employeeList'];
      }
    })

    this._employees.getUpdatedUser().subscribe(data => {
      if (data) {
        if (data === "createUser") {
          let position={
            'top': '0',
            'left':'0'
          }
          let panelClass= ['animate__animated','animate__slideInLeft'];
          this.openDialog(position, panelClass);
        }
      }
    })
  }

  /**
   * used to delete employe
   * @param id
   * return sucess | erroe
   */
  deleteEmploye(id: number) {
    this._store.dispatch(new DeleteUser(id));
    this._snackBar.open(`User deleted successfully.`, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }
  /**
   * used to get employee list
   * @param page 
   * @param limit 
   */
  getEmployeeList(page: number, limit: number) {
    this._store.dispatch(new GetUserList(page, limit))
  }
  /**
   * used to get employee details from employee array
   * @param id 
   */
  displayEmployee(id: number, op: string) {
    //  this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    //   this._router.navigate(['users',id,op]));
    this._store.dispatch(new GetUser(id));
    this._store.dispatch(new Operation(op))
    let position ={
      'top': '0',
      'right':'0'
    }
    let pannelclass=['animate__animated','animate__slideInRight']
    this.openDialog(position, pannelclass);
  }

  /**
   * used in pagination
   * @param event 
   */
  getPageDetails(event: any) {
    this.getEmployeeList(event.pageIndex + 1, 15);
  }

  /**
   * used for open dialog
   * @param position 
   * @param panelClass 
   */

  openDialog(position, panelClass){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = position;
    dialogConfig.panelClass= panelClass;
    dialogConfig.maxWidth="100vw"
    this._dialog.open(UserDetailComponent, dialogConfig);
  }

}
