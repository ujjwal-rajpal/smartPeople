import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMaterialModule } from './material.module';

import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    MyMaterialModule,
    FlexLayoutModule,
  ],
  declarations: [],
  exports:[MyMaterialModule, FlexLayoutModule]
})
export class SharedModule { }
