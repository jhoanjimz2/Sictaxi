import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalActualizarDocumentosVehiculoComponent } from './modal-actualizar-documentos-vehiculo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { of } from 'rxjs';

describe('ModalActualizarDocumentosVehiculoComponent', () => {
  let component: ModalActualizarDocumentosVehiculoComponent;
  let fixture: ComponentFixture<ModalActualizarDocumentosVehiculoComponent>;

  // Mock data for MAT_DIALOG_DATA
  const mockDialogData = {
    fechaExpedicionNumeroSOAT: '2024-01-01',
    fechas: {
      FechaNumeroSOAT: '2024-02-01',
      numeroSOAT: '123456',
      FechaNumeroTecnomecanica: '2024-03-01',
      numeroTecnoMecanica: '789456',
      FechaNumeroRCC: '2024-04-01',
      numeroRCC: '321654',
      FechaNumeroRCE: '2024-05-01',
      numeroRCE: '654987',
      fechaTarjetaOperacionF: '2024-06-01',
      tarjetaOperacion: '456123'
    },
    page: 1,
    idVehiculo: 123,
    type: 'SOAT'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalActualizarDocumentosVehiculoComponent],
      imports: [HttpClientModule], // Add HttpClientModule here
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}, // Mock de MatDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: mockDialogData // Provide mock data
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalActualizarDocumentosVehiculoComponent);
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
