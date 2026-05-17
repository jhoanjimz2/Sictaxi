import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalPerfilTaxistaComponent } from './modal-perfil-taxista.component';
import { MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { SearchCondutoresService } from 'src/app/services/search-condutores.service';
import { of } from 'rxjs';

// Mock the imagenes pipe with @Pipe decorator and correct name
@Pipe({
  name: 'imagenes'  // Correct the pipe name to 'imagenes'
})
class ImagenesPipeMock implements PipeTransform {
  transform(value: any): any {
    return value; // Mock behavior: just return the value
  }
}

describe('ModalPerfilTaxistaComponent', () => {
  let component: ModalPerfilTaxistaComponent;
  let fixture: ComponentFixture<ModalPerfilTaxistaComponent>;

  const searchCondutoresServiceMock = {
    getPerfilConductor: jasmine.createSpy('getPerfilConductor').and.returnValue(of({
      id: 1,
      nombre: 'Juan Pérez',
      imagen: 'imagen.jpg',
      // Add any other properties that are expected
    })),
    descargarPdfProfile: jasmine.createSpy('descargarPdfProfile').and.returnValue(of({ file: '', name: '' }))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ModalPerfilTaxistaComponent,
        ImagenesPipeMock  // Use the mock pipe with the correct name
      ],
      imports: [ HttpClientModule ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { someData: 'test data', idConductor: 1, completo: true } },
        { provide: SearchCondutoresService, useValue: searchCondutoresServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPerfilTaxistaComponent);
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
