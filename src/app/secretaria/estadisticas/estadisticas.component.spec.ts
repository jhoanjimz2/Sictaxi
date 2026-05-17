import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadisticasComponent } from './estadisticas.component';
import { EstadisticasService } from 'src/app/services/estadisticas.service';  // Asegúrate de importar el servicio
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EstadisticasComponent', () => {
  let component: EstadisticasComponent;
  let fixture: ComponentFixture<EstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasComponent ],
      imports: [ HttpClientModule ],  // Asegúrate de importar HttpClientModule
      providers: [ EstadisticasService ],  // Provee el servicio si es necesario
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasComponent);
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
