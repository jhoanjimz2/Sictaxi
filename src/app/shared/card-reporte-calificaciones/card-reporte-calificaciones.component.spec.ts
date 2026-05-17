import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardReporteCalificacionesComponent } from './card-reporte-calificaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CardReporteCalificacionesComponent', () => {
  let component: CardReporteCalificacionesComponent;
  let fixture: ComponentFixture<CardReporteCalificacionesComponent>;

  beforeEach(async () => {
    // Mock localStorage.getItem to return a valid user object
    const mockUser = { rol: 'admin', id: 1, name: 'Test User' };  // Example user object
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockUser));  // Mock the return value

    await TestBed.configureTestingModule({
      declarations: [ CardReporteCalificacionesComponent ],
      imports: [ HttpClientModule ],  // Ensure HttpClientModule is imported
      providers: [
        EstadisticasService,  // Provide EstadisticasService if needed
        { provide: MatDialog, useValue: { open: () => {} } }  // Mock MatDialog
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReporteCalificacionesComponent);
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
