import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { GlobalConstants } from 'src/app/includes/common';
import { select, Store } from '@ngrx/store';
import { USER_LIST_SELECTOR, USER_SELECTOR } from 'src/app/store/Selector/user.selector';
import { ActivatedRoute } from '@angular/router';
import { NewUserSubmit } from 'src/app/store/Action/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private employees: EmployeeService,
    private store: Store<any>,
    private _route: ActivatedRoute
  ) { }
  phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  employee = new FormGroup({
    id: new FormControl(""),
    name: new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("")
    }),
    gender: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    address: new FormGroup({
      lineOne: new FormControl("", Validators.required),
      lineTwo: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      landMark: new FormControl(""),
      pincode: new FormControl("")
    }),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  });

  display: boolean = false;
  operation: string;

  ngOnInit() {

    this.store.pipe(select(USER_SELECTOR)).subscribe(data => {
      if (data) {

        let employee = data;
        this.displayEmployee(employee['users']['singleEmployee']);
        if (employee['users']['operation'] === "display") {
          setTimeout(() => this.employee.disable(), 200)
          this.display = false;
          this.operation = "display";
        }
        else if ((employee['users']['operation'] === "edit")) {
          this.employee.enable();
          this.display = true;
          this.operation = "edit"
        }
      }
    })

    this.employees.getUpdatedUser().subscribe(data => {
      if (data) {
        if (data === "createUser") {
          this.display = true;
          this.employee.enable();
          this.employee.reset();
          this.operation = "create";
        }
      }
    })
  }

  onSubmit() {
    if (!this.employee.valid) return
    if (this.operation == "create")
      this.store.dispatch(new NewUserSubmit(this.employee.value))
    else if (this.operation = "edit") {

    }
  }
  /**
   * used to edit employee
   * @param data 
   * @returns formGroup
   */
  displayEmployee(data) {
    if (data) {
      return this.employee.patchValue({
        id: data.id,
        name: {
          firstName: data.name.firstName,
          lastName: data.name.lastName
        },
        gender: data.gender,
        dob: data.dob,
        address: {
          lineOne: data.address.lineOne,
          lineTwo: data.address.lineTwo,
          city: data.address.city,
          state: data.address.state,
          landMark: data.address.landMark,
          pincode: data.address.pincode
        },
        email: data.email,
        phone: data.phone

      })
    }
  }
}
