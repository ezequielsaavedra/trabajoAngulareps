import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCursosFormComponent } from './edit-cursos-form.component';

describe('EditCursosFormComponent', () => {
  let component: EditCursosFormComponent;
  let fixture: ComponentFixture<EditCursosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCursosFormComponent ]
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
