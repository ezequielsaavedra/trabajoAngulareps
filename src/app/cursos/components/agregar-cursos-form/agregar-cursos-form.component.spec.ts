import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAdapter } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosService } from '../../services/cursos.service';

import { AgregarCursosFormComponent } from './agregar-cursos-form.component';

describe('AgregarCursosFormComponent', () => {
  let component: AgregarCursosFormComponent;
  let fixture: ComponentFixture<AgregarCursosFormComponent>;
  const dialogRefData = {
    close: jasmine.createSpy('close')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursosFormComponent ],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [CursosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCursosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
