import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { GlobalConstants } from 'src/app/includes/common';
import { select, Store } from '@ngrx/store';
import { GetUserList } from 'src/app/store/action/user.actions';
import { User } from 'src/app/core/models/user';
import { USER_LIST_Selector } from 'src/app/store/Selector/user.selector';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'email','phone', 'action'];
  dataSource =[]
  employeListSUbscription:Subscription;
  constructor(private employee:EmployeeService, private store:Store<User>) { }
  ngOnInit() {
   this.getEmployeeList(1,5);
   this.store.pipe(select(USER_LIST_Selector)).subscribe(data=>{
     if(data){
      let employee = data;
     this.dataSource = employee['users'];
     }
     
   })
  }

  /**
   * used to delete employe
   * @param id
   * return sucess | erroe
   */
  deleteEmploye(id: number){
    // this.employee.deleteEmployee(GlobalConstants.API_SLUG, id).subscribe(data=>{
    //   if(data){
    //     let index = this.employeList.findIndex(obj => obj.id === id);
    //     let op = this.dataSource.splice(index,1);
    //     // this.dataSource = this.employeList;
    //     this.getEmployeeList(1,5)
    //   }
    // })
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
  //   let index = this.employeList.findIndex(obj => obj.id === id);
  //     let data = {
  //       employe : this.employeList[index],
  //       opration: op
  //     }
  //     this.employee.updateUser(data);
  }

}
