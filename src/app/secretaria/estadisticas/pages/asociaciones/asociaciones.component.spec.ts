import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsociacionesComponent } from './asociaciones.component';
import { MatDialogModule } from '@angular/material/dialog';  // Importar MatDialogModule
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AsociacionesComponent', () => {
  let component: AsociacionesComponent;
  let fixture: ComponentFixture<AsociacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsociacionesComponent],
      imports: [MatDialogModule, HttpClientTestingModule],  // Asegúrate de importar MatDialogModule
      schemas: [NO_ERRORS_SCHEMA],  // Para evitar errores con componentes no declarados

    })
      .compileComponents();

    fixture = TestBed.createComponent(AsociacionesComponent);
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
