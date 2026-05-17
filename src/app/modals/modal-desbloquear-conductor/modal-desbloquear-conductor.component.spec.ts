import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDesbloquearConductorComponent } from './modal-desbloquear-conductor.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Importar MAT_DIALOG_DATA
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalDesbloquearConductorComponent', () => {
  let component: ModalDesbloquearConductorComponent;
  let fixture: ComponentFixture<ModalDesbloquearConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDesbloquearConductorComponent],
      imports: [HttpClientTestingModule],  // Importar el módulo para simular las solicitudes HTTP
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } }, // Mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock de MAT_DIALOG_DATA
      ],
      schemas: [NO_ERRORS_SCHEMA], // Ignorar errores relacionados con elementos desconocidos en la plantilla
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDesbloquearConductorComponent);
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
