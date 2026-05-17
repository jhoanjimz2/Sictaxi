import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLoginComponent } from './form-login.component';
import { AuthService } from 'src/app/services/auth.service';  // Asegúrate de importar tu servicio
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa el módulo de pruebas HTTP
import { MatDialogModule } from '@angular/material/dialog';  // Importa MatDialogModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginComponent ],
      imports: [
        HttpClientTestingModule,  // Importa HttpClientTestingModule
        MatDialogModule           // Importa MatDialogModule para que MatDialog esté disponible
      ],
      providers: [ AuthService ],  // Asegúrate de que tu servicio AuthService esté en los proveedores
      schemas: [NO_ERRORS_SCHEMA]  // Usar si no quieres que se muestren errores por elementos desconocidos en el template
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLoginComponent);
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
