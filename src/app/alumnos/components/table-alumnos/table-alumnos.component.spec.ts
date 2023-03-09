import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlumnosService } from '../../services/alumnos.service';

import { TableAlumnosComponent } from './table-alumnos.component';

describe('TableAlumnosComponent', () => {
  let component: TableAlumnosComponent;
  let fixture: ComponentFixture<TableAlumnosComponent>;
  const dialogRefData = {
    close: jasmine.createSpy('close')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAlumnosComponent ],
      providers: [AlumnosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
