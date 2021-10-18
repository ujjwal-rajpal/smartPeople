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

@NgModule({
    imports:[ MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatPaginatorModule ],
    exports:[ MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule, MatPaginatorModule ]
})

export class MyMaterialModule{}