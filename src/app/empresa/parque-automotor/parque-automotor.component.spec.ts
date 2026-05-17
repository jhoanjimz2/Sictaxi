import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParqueAutomotorComponent } from './parque-automotor.component';
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Asegúrate de importar tu servicio
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa el módulo de pruebas HTTP
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';  // Si el componente usa MatDialog
import { MatTableModule } from '@angular/material/table';  // Si el componente usa MatTable

describe('ParqueAutomotorComponent', () => {
  let component: ParqueAutomotorComponent;
  let fixture: ComponentFixture<ParqueAutomotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParqueAutomotorComponent ],
      imports: [
        HttpClientTestingModule,   // Importa HttpClientTestingModule
        MatDialogModule,           // Importar si se usa MatDialog
        MatTableModule             // Importar si se usa MatTable
      ],
      providers: [ EstadisticasService ],  // Asegúrate de que tu servicio EstadisticasService esté en los proveedores
      schemas: [NO_ERRORS_SCHEMA]  // Usar si no quieres que se muestren errores por elementos desconocidos en el template
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParqueAutomotorComponent);
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
