import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import {MatTableModule} from '@angular/material/table'; 
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'; 
import { MatRadioModule } from '@angular/material/radio'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 

import {MatNativeDateModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
    imports:[ MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule, MatSelectModule ],
    exports:[ MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule, MatSelectModule ]
})

export class MyMaterialModule{}