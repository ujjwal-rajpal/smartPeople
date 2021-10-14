import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { GlobalConstants } from 'src/app/includes/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'email','phone', 'action'];
  dataSource : any= [];
  constructor(private employee:EmployeeService) { }
  employeList:Array<any>;
  employeListSUbscription:Subscription;

  ngOnInit() {
   this.getEmployeeList(1,5);
  }

  /**
   * used to delete employe
   * @param id
   * return sucess | erroe
   */
  deleteEmploye(id: number){
    this.employee.deleteEmployee(GlobalConstants.API_SLUG, id).subscribe(data=>{
      if(data){
        let index = this.employeList.findIndex(obj => obj.id === id);
        let op = this.dataSource.splice(index,1);
        // this.dataSource = this.employeList;
        this.getEmployeeList(1,5)
      }
    })
  }
  /**
   * used to get employee list
   * @param page 
   * @param limit 
   */
  getEmployeeList(page, limit){
    this.employeListSUbscription = this.employee.getEmployeeList(GlobalConstants.API_SLUG, page,limit).subscribe(data=>{
      if(data){
        this.employeList = data;
        this.dataSource = data;
      }
    })
  }
  /**
   * used to get employee details from employee array
   * @param id 
   */
   displayEmployee(id: number,op: string){
    let index = this.employeList.findIndex(obj => obj.id === id);
      let data = {
        employe : this.employeList[index],
        opration: op
      }
      this.employee.updateUser(data);
  }

}
