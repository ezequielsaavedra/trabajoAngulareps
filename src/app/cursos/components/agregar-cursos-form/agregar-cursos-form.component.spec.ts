import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCursosFormComponent } from './agregar-cursos-form.component';

describe('AgregarCursosFormComponent', () => {
  let component: AgregarCursosFormComponent;
  let fixture: ComponentFixture<AgregarCursosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCursosFormComponent ]
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
