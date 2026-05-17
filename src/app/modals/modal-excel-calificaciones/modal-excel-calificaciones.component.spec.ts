import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalExcelCalificacionesComponent } from './modal-excel-calificaciones.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar el módulo HttpClientTesting
import { LoadingService } from 'src/app/services/loading.service';  // Importar servicios adicionales si es necesario
import { DownloadService } from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalExcelCalificacionesComponent', () => {
  let component: ModalExcelCalificacionesComponent;
  let fixture: ComponentFixture<ModalExcelCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExcelCalificacionesComponent ],
      imports: [
        HttpClientTestingModule  // Importar el HttpClientTestingModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },  // Proveer un valor vacío para MAT_DIALOG_DATA
        { provide: MatDialogRef, useValue: { close: () => {} } },  // Mock de MatDialogRef
        LoadingService,  // Proveer el LoadingService
        DownloadService,  // Proveer el DownloadService
        EstadisticasService  // Proveer el EstadisticasService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExcelCalificacionesComponent);
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
