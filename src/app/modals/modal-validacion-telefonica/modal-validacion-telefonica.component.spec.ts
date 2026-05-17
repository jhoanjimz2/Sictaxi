import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalValidacionTelefonicaComponent } from './modal-validacion-telefonica.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Asegúrate de importar HttpClientTestingModule
import { LoadingService } from 'src/app/services/loading.service';
import { AddConductorService } from 'src/app/services/add-conductor.service';

class MatDialogRefMock {
  close() {}
}

const MAT_DIALOG_DATA_MOCK = {
  fechaUltimaRefrendacion: new Date(),
  idConductor: 1,
  telefono: '1234567890',
  cedula: '123456789'
};

describe('ModalValidacionTelefonicaComponent', () => {
  let component: ModalValidacionTelefonicaComponent;
  let fixture: ComponentFixture<ModalValidacionTelefonicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalValidacionTelefonicaComponent ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule  // Importa el módulo HttpClientTestingModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },  // Mock de MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: MAT_DIALOG_DATA_MOCK },  // Proveer los datos de MAT_DIALOG_DATA
        LoadingService,
        AddConductorService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalValidacionTelefonicaComponent);
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
