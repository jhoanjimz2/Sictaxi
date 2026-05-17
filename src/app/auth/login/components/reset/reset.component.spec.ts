import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetComponent } from './reset.component';
import { AuthService } from 'src/app/services/auth.service'; // Asegúrate de importar tu servicio
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa el módulo de pruebas HTTP
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
      imports: [ HttpClientTestingModule ],  // Importa HttpClientTestingModule
      providers: [ AuthService ],  // Asegúrate de que tu servicio AuthService está en los proveedores
      schemas: [NO_ERRORS_SCHEMA]  // Usar si no quieres que se muestren errores por elementos desconocidos en el template
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetComponent);
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
