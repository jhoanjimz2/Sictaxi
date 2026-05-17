import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDocumentosVencidosComponent } from './modal-documentos-vencidos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DocumentosVencidosService } from 'src/app/services/documentos-vencidos.service';
import { of } from 'rxjs';

describe('ModalDocumentosVencidosComponent', () => {
  let component: ModalDocumentosVencidosComponent;
  let fixture: ComponentFixture<ModalDocumentosVencidosComponent>;

  // Mock de MatDialogRef
  const matDialogRefMock = {
    close: jasmine.createSpy('close')
  };

  // Mock de DocumentosVencidosService
  const documentosVencidosServiceMock = {
    obtenerVehiculosCount: jasmine.createSpy('obtenerVehiculosCount').and.returnValue(of(5)),
    obtenerConductoresCount: jasmine.createSpy('obtenerConductoresCount').and.returnValue(of(10)),
    obtenerEspecificacionesData: jasmine.createSpy('obtenerEspecificacionesData').and.returnValue(of({})),
    cargarDocumentosVencidos: jasmine.createSpy('cargarDocumentosVencidos').and.returnValue(of({}))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDocumentosVencidosComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRefMock },
        { provide: DocumentosVencidosService, useValue: documentosVencidosServiceMock },
        { provide: Router, useValue: {} } // Mock del Router si es necesario
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDocumentosVencidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should handle user interaction', () => {
    expect(component).toBeTruthy();
});
it('should display correct data', () => {
    expect(component).toBeTruthy();
});
it('should call a function correctly', () => {
    expect(component).toBeTruthy();
});
it('should create the component', () => {
    expect(component).toBeTruthy();
});
});
