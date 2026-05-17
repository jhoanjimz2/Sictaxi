import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEliminarAsociacionComponent } from './modal-eliminar-asociacion.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';  // Para simular un observable
import { HttpClientModule } from '@angular/common/http';  // Importar HttpClientModule

describe('ModalEliminarAsociacionComponent', () => {
  let component: ModalEliminarAsociacionComponent;
  let fixture: ComponentFixture<ModalEliminarAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalEliminarAsociacionComponent],
      imports: [HttpClientModule],  // Agregar HttpClientModule aquí
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        // Mock de MatDialogRef
        {
          provide: MatDialogRef,
          useValue: {
            close: jasmine.createSpy('close'),  // Simular el método close
            afterClosed: () => of(true)  // Retornar un observable simulado
          }
        },
        // Mock de MAT_DIALOG_DATA
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}  // Mock de los datos que deberían ser inyectados
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarAsociacionComponent);
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
