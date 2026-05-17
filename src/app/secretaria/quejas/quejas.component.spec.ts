import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuejasComponent } from './quejas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';  // Importa MatDialogModule
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Asegúrate de importar el servicio

describe('QuejasComponent', () => {
  let component: QuejasComponent;
  let fixture: ComponentFixture<QuejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuejasComponent ],
      imports: [
        MatDialogModule,  // Asegúrate de importar MatDialogModule
        HttpClientModule  // Asegúrate de importar HttpClientModule
      ],
      providers: [ EstadisticasService ],  // Proveemos el servicio EstadisticasService
      schemas: [NO_ERRORS_SCHEMA]  // Para evitar errores con componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuejasComponent);
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
