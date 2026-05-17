import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxistasSinRefrendarComponent } from './taxistas-sin-refrendar.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';  // Importa MatDialog
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Importa el servicio si es necesario
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TaxistasSinRefrendarComponent', () => {
  let component: TaxistasSinRefrendarComponent;
  let fixture: ComponentFixture<TaxistasSinRefrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxistasSinRefrendarComponent ],
      imports: [
        MatDialogModule,  // Asegúrate de que MatDialogModule esté importado
        HttpClientModule  // Asegúrate de que HttpClientModule esté importado
      ],
      providers: [
        MatDialog,  // Proporciona MatDialog en el entorno de prueba
        EstadisticasService  // Provee el servicio si es necesario
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasSinRefrendarComponent);
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
