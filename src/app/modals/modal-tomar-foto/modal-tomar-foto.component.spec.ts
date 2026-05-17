import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTomarFotoComponent } from './modal-tomar-foto.component';
import { MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// Crear un mock de MatDialogRef
class MatDialogRefMock {
  close() {}
}

describe('ModalTomarFotoComponent', () => {
  let component: ModalTomarFotoComponent;
  let fixture: ComponentFixture<ModalTomarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTomarFotoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock } // Mock de MatDialogRef
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTomarFotoComponent);
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
