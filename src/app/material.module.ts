import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatInputModule,
    
  ], 
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class MaterialModule { }
