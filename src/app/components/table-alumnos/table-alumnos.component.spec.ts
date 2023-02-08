import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlumnosComponent } from './table-alumnos.component';

describe('TableAlumnosComponent', () => {
  let component: TableAlumnosComponent;
  let fixture: ComponentFixture<TableAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAlumnosComponent ]
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
