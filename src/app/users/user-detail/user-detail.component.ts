import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { GlobalConstants } from 'src/app/includes/common';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  
  constructor(
    private employees: EmployeeService
  ) { }
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  employee= new FormGroup({
    id: new FormControl(""),
    name: new FormGroup({
      firstName: new FormControl("",Validators.required),
      lastName: new FormControl("")
    }),
    gender: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    address: new FormGroup({
      lineOne: new FormControl("", Validators.required),
      lineTwo : new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      landMark: new FormControl(""),
      pincode: new FormControl("")
    }),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  });

  displaySubmit: boolean;

  ngOnInit() {
    this.employees.getUpdatedUser().subscribe(data=>{
      if(Object.keys(data).length === 0 )return;
      this.displaySubmit = (data.opration !== "display" ) ?   true : false ;
      if(data.op !== "create")
      if(Object.keys(data.employe).length === 0 ){
        this.employee.reset();
        return
      }
      this.displayEmployee(data.employe)
    })
  }

  onSubmit(){
    if(!this.employee.valid)return
   
    this.employees.newEmployee(GlobalConstants.API_SLUG,this.employee.value).subscribe(data=>{
      if(data){
        this.employee.reset();
      }
      
    })
  }
 /**
  * used to edit employee
  * @param data 
  * @returns formGroup
  */
  displayEmployee(data){
    if(data){
    return this.employee.patchValue({id: data.id,
      name:{firstName : data.name.firstName,
      lastName: data.name.lastName
      },
      gender: data.gender,
      dob: data.dob,
      address:{
        lineOne:data.address.lineOne,
        lineTwo: data.address.lineTwo,
        city: data.address.city,
        state: data.address.state,
        landMark: data.address.landMark,
        pincode: data.address.pincode
      },
      email: data.email,
      phone: data.phone
      
      })
  }}
}
