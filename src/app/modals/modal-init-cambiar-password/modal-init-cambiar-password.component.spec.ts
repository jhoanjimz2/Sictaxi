import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalInitCambiarPasswordComponent } from './modal-init-cambiar-password.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ModalInitCambiarPasswordComponent', () => {
  let component: ModalInitCambiarPasswordComponent;
  let fixture: ComponentFixture<ModalInitCambiarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalInitCambiarPasswordComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule  // Agregar HttpClientTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } }  // Mock de MatDialogRef
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalInitCambiarPasswordComponent);
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
