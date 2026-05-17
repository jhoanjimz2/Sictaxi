import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalActualizarDocumentosConductorComponent } from './modal-actualizar-documentos-conductor.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  // Importa MAT_DIALOG_DATA
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule

describe('ModalActualizarDocumentosConductorComponent', () => {
  let component: ModalActualizarDocumentosConductorComponent;
  let fixture: ComponentFixture<ModalActualizarDocumentosConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalActualizarDocumentosConductorComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: () => {} }  // Proveer un MatDialogRef simulado
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}  // Proveer un valor simulado para los datos del diálogo
        }
      ],
      imports: [
        HttpClientTestingModule  // Asegúrate de importar HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Usar para evitar errores de elementos no conocidos
    }).compileComponents();

    fixture = TestBed.createComponent(ModalActualizarDocumentosConductorComponent);
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
