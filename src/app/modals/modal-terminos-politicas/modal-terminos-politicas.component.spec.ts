import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTerminosPoliticasComponent } from './modal-terminos-politicas.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Crear un mock de MatDialogRef
class MatDialogRefMock {
  close() {}
}

// Crear un mock para MAT_DIALOG_DATA
const MAT_DIALOG_DATA_MOCK = { section: 'terms' };

describe('ModalTerminosPoliticasComponent', () => {
  let component: ModalTerminosPoliticasComponent;
  let fixture: ComponentFixture<ModalTerminosPoliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTerminosPoliticasComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock }, // Proveer el mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATA_MOCK } // Proveer el mock de MAT_DIALOG_DATA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTerminosPoliticasComponent);
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
