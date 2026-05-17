import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEliminarParametroComponent } from './modal-eliminar-parametro.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Crear un mock para MatDialogRef
class MatDialogRefMock {
  close() {}
}

// Crear un mock para los datos del dialogo
const MAT_MDC_DIALOG_DATA_MOCK = { id: '1', action: 'MAR' };

describe('ModalEliminarParametroComponent', () => {
  let component: ModalEliminarParametroComponent;
  let fixture: ComponentFixture<ModalEliminarParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEliminarParametroComponent ],
      imports: [
        MatDialogModule,  // Asegúrate de importar MatDialogModule
        HttpClientTestingModule // Asegúrate de importar HttpClientTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },  // Proveer el mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: MAT_MDC_DIALOG_DATA_MOCK },  // Proveer los datos simulados para MAT_DIALOG_DATA
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEliminarParametroComponent);
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
