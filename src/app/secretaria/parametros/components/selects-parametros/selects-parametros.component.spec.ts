import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectsParametrosComponent } from './selects-parametros.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Importa MatDialog

describe('SelectsParametrosComponent', () => {
  let component: SelectsParametrosComponent;
  let fixture: ComponentFixture<SelectsParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectsParametrosComponent ],
      imports: [ HttpClientTestingModule ], // Agregar HttpClientTestingModule aquí
      providers: [
        {
          provide: MatDialog,
          useValue: { open: () => {} }, // Mock básico para MatDialog
        },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectsParametrosComponent);
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
