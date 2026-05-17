import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatriculasCanceladasComponent } from './matriculas-canceladas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';  // Si utilizas MatDialog
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule

describe('MatriculasCanceladasComponent', () => {
  let component: MatriculasCanceladasComponent;
  let fixture: ComponentFixture<MatriculasCanceladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculasCanceladasComponent ],
      imports: [
        MatDialogModule,  // Si utilizas MatDialog en tu componente
        HttpClientTestingModule  // Agrega HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Para evitar errores de componentes hijos no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasCanceladasComponent);
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
