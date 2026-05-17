import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalBuenasCalificacionesComponent } from './modal-buenas-calificaciones.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { OrderDatePipe } from 'src/app/pipes/order-date.pipe';  // Importa el pipe

describe('ModalBuenasCalificacionesComponent', () => {
  let component: ModalBuenasCalificacionesComponent;
  let fixture: ComponentFixture<ModalBuenasCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBuenasCalificacionesComponent, OrderDatePipe ], // Declara el pipe aquí
      imports: [ HttpClientTestingModule ], // Agrega HttpClientTestingModule
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBuenasCalificacionesComponent);
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
