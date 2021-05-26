import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdcButtonModule} from '@angular-mdc/web/button';
import {MdcCardModule} from '@angular-mdc/web/card';
import {MdcFormFieldModule} from '@angular-mdc/web/form-field';
import {MdcIconModule} from '@angular-mdc/web/icon';
import {MdcIconButtonModule} from '@angular-mdc/web/icon-button';

const modules: any[] = [
  CommonModule,
  MdcButtonModule,
  MdcCardModule,
  MdcFormFieldModule,
  MdcIconModule,
  MdcIconButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialDesignModule { }
