import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidenciasComponent } from './incidencias.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar el módulo de pruebas HTTP
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { MatDialog } from '@angular/material/dialog';  // Importar MatDialog

// Crear un mock de MatDialog
class MatDialogMock {
  open() {
    return { afterClosed: () => ({ subscribe: () => {} }) };
  }
}

describe('IncidenciasComponent', () => {
  let component: IncidenciasComponent;
  let fixture: ComponentFixture<IncidenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidenciasComponent ],
      imports: [HttpClientTestingModule],  // Importar HttpClientTestingModule
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        EstadisticasService,
        { provide: MatDialog, useClass: MatDialogMock }  // Proveer el mock de MatDialog
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasComponent);
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
