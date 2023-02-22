import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarAlumnosComponent } from './form-agregar-alumnos.component';

describe('FormAgregarAlumnosComponent', () => {
  let component: FormAgregarAlumnosComponent;
  let fixture: ComponentFixture<FormAgregarAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarAlumnosComponent ]
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
