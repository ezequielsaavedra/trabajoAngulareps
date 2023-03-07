import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { NombresPipe } from './pipes/nombres.pipe';


@NgModule({
  declarations: [
    BooleanToTextPipe,
    NombresPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    BooleanToTextPipe,
    NombresPipe
  ]
})
export class SharedModule { }
