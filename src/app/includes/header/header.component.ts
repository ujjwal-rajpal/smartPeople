import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialogRef} from "@angular/material";
import {MatSnackBar,  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
constructor(private employee : EmployeeService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {}

  ngOnInit() {
    
  }

  createNewEmploye(){
    // this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    //   this._router.navigate(['users/createNew']));
      this.employee.updateUser("createUser");

  }

}
