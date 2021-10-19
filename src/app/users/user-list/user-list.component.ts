import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { select, Store } from '@ngrx/store';
import { DeleteUser, GetUser, GetUserList, Operation } from 'src/app/store/Action/user.actions';
import { User } from 'src/app/core/models/user';
import { USER_LIST_SELECTOR } from 'src/app/store/Selector/user.selector';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'email','phone', 'action'];
  dataSource =[]
  employeListSUbscription:Subscription;
  constructor(private employee:EmployeeService, private store:Store<User>,
    private _router: Router,
    private _route: ActivatedRoute) { }
  ngOnInit() {
   this.getEmployeeList(1,15);
   this.store.pipe(select(USER_LIST_SELECTOR)).subscribe(data=>{
    if(data){
     let employee = data;
    this.dataSource = employee['users']['employeeList'];
    }
  })
  }

  /**
   * used to delete employe
   * @param id
   * return sucess | erroe
   */
  deleteEmploye(id: number){
    this.store.dispatch(new DeleteUser(id));
  }
  /**
   * used to get employee list
   * @param page 
   * @param limit 
   */
  getEmployeeList(page: number, limit: number){
    this.store.dispatch(new GetUserList(page,limit))
  }
  /**
   * used to get employee details from employee array
   * @param id 
   */
   displayEmployee(id: number,op: string){
     this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this._router.navigate(['users',id,op]));
      this.store.dispatch(new GetUser(id));
      this.store.dispatch(new Operation(op))
   }

   displayEmployeeMobile(id: number, op: string){
    this._router.navigate(['users',id,op]);
    this.store.dispatch(new GetUser(id));
      this.store.dispatch(new Operation(op))
   }

   getPageDetails(event:any) {
    this.getEmployeeList(event.pageIndex+1,15);
  }

}
