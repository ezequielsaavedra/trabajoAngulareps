import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosService } from '../../services/cursos.service';

import { EditCursosFormComponent } from './edit-cursos-form.component';

describe('EditCursosFormComponent', () => {
  let component: EditCursosFormComponent;
  let fixture: ComponentFixture<EditCursosFormComponent>;
  const dialogRefData = {
    close: jasmine.createSpy('close')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCursosFormComponent ],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [CursosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData}, { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCursosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
