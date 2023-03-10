import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosService } from '../../services/alumnos.service';

import { EditAlumnosFormComponent } from './edit-alumnos-form.component';

describe('EditAlumnosFormComponent', () => {
  let component: EditAlumnosFormComponent;
  let fixture: ComponentFixture<EditAlumnosFormComponent>;
  const dialogRefData = {
    close: jasmine.createSpy('close')
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlumnosFormComponent ],
      imports: [SharedModule],
      providers: [AlumnosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData}, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlumnosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
