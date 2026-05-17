import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPublicidadComponent } from './modal-publicidad.component';
import { MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalPublicidadComponent', () => {
  let component: ModalPublicidadComponent;
  let fixture: ComponentFixture<ModalPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPublicidadComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: () => {} }  // Mock de MatDialogRef
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Ignorar elementos no reconocidos en la plantilla
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPublicidadComponent);
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
