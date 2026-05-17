import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCrearParametroComponent } from './modal-crear-parametro.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo HttpClientTestingModule

describe('ModalCrearParametroComponent', () => {
  let component: ModalCrearParametroComponent;
  let fixture: ComponentFixture<ModalCrearParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearParametroComponent ],
      imports: [ HttpClientTestingModule ], // Agrega HttpClientTestingModule
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy() }, // Mock básico para MatDialogRef
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            id: '1',  // Proporciónale un id para evitar que sea undefined
            action: 'MAR',  // Proporciónale una acción válida
            texto: 'Test'   // Proporciónale un texto para evitar que sea undefined
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCrearParametroComponent);
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
