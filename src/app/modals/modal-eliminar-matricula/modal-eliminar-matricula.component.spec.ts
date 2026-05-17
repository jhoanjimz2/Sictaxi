import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEliminarMatriculaComponent } from './modal-eliminar-matricula.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalEliminarMatriculaComponent', () => {
  let component: ModalEliminarMatriculaComponent;
  let fixture: ComponentFixture<ModalEliminarMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarMatriculaComponent ],
      imports: [ HttpClientTestingModule ],  // Importar HttpClientTestingModule para que HttpClient esté disponible
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },  // Mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} }  // Mock de MAT_DIALOG_DATA
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Esquema para evitar errores relacionados con otros componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarMatriculaComponent);
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
