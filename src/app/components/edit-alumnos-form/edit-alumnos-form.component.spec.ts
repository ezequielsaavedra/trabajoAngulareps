import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlumnosFormComponent } from './edit-alumnos-form.component';

describe('EditAlumnosFormComponent', () => {
  let component: EditAlumnosFormComponent;
  let fixture: ComponentFixture<EditAlumnosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlumnosFormComponent ]
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
