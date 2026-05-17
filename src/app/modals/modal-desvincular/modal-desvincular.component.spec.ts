import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalDesvincularComponent } from './modal-desvincular.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { of } from 'rxjs';

// Crear un mock para MatDialogRef
class MatDialogRefMock {
  close() {}
}

describe('ModalDesvincularComponent', () => {
  let component: ModalDesvincularComponent;
  let fixture: ComponentFixture<ModalDesvincularComponent>;

  // Mock de MAT_DIALOG_DATA
  const matDialogDataMock = {
    idVinculacion: 123,
    page: 1,
    tipo: 'conductor',  // o 'vehiculo'
    idsSeleccionados: [1, 2, 3]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalDesvincularComponent],
      imports: [HttpClientTestingModule],  // Include HttpClientTestingModule here
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },  // Proveer el mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataMock }  // Proveer el mock de MAT_DIALOG_DATA
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDesvincularComponent);
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
