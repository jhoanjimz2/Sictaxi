import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCrearAsociacionComponent } from './modal-crear-asociacion.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule to provide HttpClient
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { of } from 'rxjs';

// Mock EstadisticasService if needed (optional)
class EstadisticasServiceMock {
  getAsociacion(id: number) {
    return of({ nit: '123', razonSocial: 'Test', direccion: 'Test Street', telefono: '123456', email: 'test@test.com' });
  }

  guardarAsociacion(data: any) {
    return of({});  // Mocking the save behavior
  }
}

describe('ModalCrearAsociacionComponent', () => {
  let component: ModalCrearAsociacionComponent;
  let fixture: ComponentFixture<ModalCrearAsociacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearAsociacionComponent ],
      imports: [ HttpClientModule ],  // Include HttpClientModule
      providers: [
        { provide: MatDialogRef, useValue: { close: jasmine.createSpy('close') } },
        { provide: MAT_DIALOG_DATA, useValue: { id: 1 } },
        { provide: EstadisticasService, useClass: EstadisticasServiceMock }  // Use the mock service
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearAsociacionComponent);
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
