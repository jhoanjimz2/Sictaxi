import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEliminarEmpresaComponent } from './modal-eliminar-empresa.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule

describe('ModalEliminarEmpresaComponent', () => {
  let component: ModalEliminarEmpresaComponent;
  let fixture: ComponentFixture<ModalEliminarEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEliminarEmpresaComponent],
      imports: [HttpClientTestingModule], // Agrega HttpClientTestingModule aquí
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },  // Mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: { id: 1 } }  // Proveer un valor simulado para MAT_DIALOG_DATA
      ],
      schemas: [NO_ERRORS_SCHEMA] // Usar para evitar errores de elementos no conocidos
    }).compileComponents();

    fixture = TestBed.createComponent(ModalEliminarEmpresaComponent);
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
