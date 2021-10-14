import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  

  constructor(private employee : EmployeeService) {}

  ngOnInit() {
  }

  createNewEmploye(){
    let data = {
      employe : new Object(),
      opration: "create"
    }
    this.employee.updateUser(data);
  }

}
