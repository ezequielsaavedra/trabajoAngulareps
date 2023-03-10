import { Dialog, DIALOG_SCROLL_STRATEGY } from '@angular/cdk/dialog';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosService } from '../../services/cursos.service';

import { TableCursosComponent } from './table-cursos.component';

describe('TableCursosComponent', () => {
  let component: TableCursosComponent;
  let fixture: ComponentFixture<TableCursosComponent>;
  const dialogRefData = {
    close: jasmine.createSpy('close')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCursosComponent],
      imports: [SharedModule],
      providers: [CursosService, HttpClient, HttpHandler, MatDialog, { provide: MatDialogRef, useValue: dialogRefData }, { provide: MAT_DIALOG_SCROLL_STRATEGY, useValue: {} }, Dialog, { provide: DIALOG_SCROLL_STRATEGY, useValue: {} }],
    })

      .compileComponents();

    fixture = TestBed.createComponent(TableCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
