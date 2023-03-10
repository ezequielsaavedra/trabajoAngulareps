import { Dialog, DIALOG_SCROLL_STRATEGY } from '@angular/cdk/dialog';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
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
      declarations: [TableAlumnosComponent],
      imports: [SharedModule],
      providers: [AlumnosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData }, { provide: MAT_DIALOG_SCROLL_STRATEGY, useValue: {} }, Dialog, { provide: DIALOG_SCROLL_STRATEGY, useValue: {} }]
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
