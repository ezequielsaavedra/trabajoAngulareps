import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [SharedModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("formulario valido" , () => {
    const form = component.formulario;
    const usuario = form.controls["usuario"];
    const contrasena = form.controls["contrasena"];

    usuario.setValue("Ezequiel Saavedra");
    contrasena.setValue("asd123");
    expect(form.valid).toBeTrue();
  })

  it("sesion iniciada", () => {
    const form = component.formulario;
    const us = form.controls["usuario"];
    const cont = form.controls["contrasena"];
    const adm = form.controls["esAdmin"];

    us.setValue("Ezequiel Saavedra");
    cont.setValue("asd123");
    adm.setValue(true);

    const button = fixture.debugElement.query(By.css("#btnLogin"));
    button.nativeElement.click();

    fixture.detectChanges();
    
    const user = component.usuario

    expect(user).toEqual({
      usuario: "Ezequiel Saavedra",
      contrasena: "asd123",
      esAdmin: true
    })
  })
});
