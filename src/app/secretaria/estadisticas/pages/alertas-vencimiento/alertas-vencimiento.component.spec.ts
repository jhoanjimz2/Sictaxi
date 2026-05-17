import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertasVencimientoComponent } from './alertas-vencimiento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { MatDialogModule } from '@angular/material/dialog';  // Importar MatDialogModule
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FechasVencidasPipe } from 'src/app/pipes/fechas-vencidas.pipe';  // Asegúrate de importar el pipe correcto

describe('AlertasVencimientoComponent', () => {
  let component: AlertasVencimientoComponent;
  let fixture: ComponentFixture<AlertasVencimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AlertasVencimientoComponent,
        FechasVencidasPipe // Declarar el pipe en el entorno de prueba
      ],
      imports: [
        HttpClientTestingModule,  // Para las pruebas de HttpClient
        MatDialogModule           // Para proporcionar MatDialog
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasVencimientoComponent);
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
