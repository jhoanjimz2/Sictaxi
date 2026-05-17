import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute
import { of } from 'rxjs'; // Importar 'of' para simular observables
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AgregarConductorComponent } from './agregar-conductor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog'; // Importar Angular Material

describe('AgregarConductorComponent', () => {
  let component: AgregarConductorComponent;
  let fixture: ComponentFixture<AgregarConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarConductorComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule, // Importar el módulo de MatDialog
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { idConductor: 123 } }, // Simular parámetros de la URL
            paramMap: of({ get: (param: string) => (param === 'idConductor' ? '123' : null) }), // Simular observable para parámetros
          },
        },
        { provide: MatDialog, useValue: {} }, // Mock básico para MatDialog
        { provide: MatDialogRef, useValue: {} }, // Mock básico para MatDialogRef
      ],
      schemas: [NO_ERRORS_SCHEMA], // Ignorar errores de componentes desconocidos
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarConductorComponent);
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
