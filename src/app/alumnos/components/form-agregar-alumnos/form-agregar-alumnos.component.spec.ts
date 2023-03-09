import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosService } from '../../services/alumnos.service';

import { FormAgregarAlumnosComponent } from './form-agregar-alumnos.component';

describe('FormAgregarAlumnosComponent', () => {
  let component: FormAgregarAlumnosComponent;
  let fixture: ComponentFixture<FormAgregarAlumnosComponent>;
  const dialogRefData = {
    close: jasmine.createSpy('close')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarAlumnosComponent ],
      imports: [SharedModule],
      providers: [AlumnosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAgregarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
