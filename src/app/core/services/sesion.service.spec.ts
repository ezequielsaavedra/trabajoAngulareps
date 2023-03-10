import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SesionService } from './sesion.service';

describe('SesionService', () => {
  let service: SesionService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SesionService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("la sesion no existe", () => {
    service.obtenerSesion().subscribe(() => {
      expect(service.sesion.sesionActiva).toBeFalse();
    })
  })

}
)
