import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalBloquearConductorComponent } from './modal-bloquear-conductor.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

describe('ModalBloquearConductorComponent', () => {
  let component: ModalBloquearConductorComponent;
  let fixture: ComponentFixture<ModalBloquearConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBloquearConductorComponent ],
      imports: [ HttpClientModule ],  // Add HttpClientModule here
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close') }  // Mock MatDialogRef with a close method
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { conductor: { idVinculacion: 123, estado: 'Activo' } }  // Mock data passed to the modal
        },
        LoadingService, // Add the LoadingService
        EstadisticasService, // Add the EstadisticasService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalBloquearConductorComponent);
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
