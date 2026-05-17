import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ImagenesPipe } from 'src/app/pipes/imagenes.pipe';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { of } from 'rxjs';  // Import 'of' to simulate an observable
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({
      fotoUrl: 'https://example.com/photo.jpg',
      nombres: 'John Doe',
      apellidos: 'Doe',
      cedula: '12345',
      direccion: 'Some Address',
      telefono: '1234567890',
      email: 'john.doe@example.com'
    }));

    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioComponent, ImagenesPipe ],  // Declare the pipe in the tests
      imports: [
        HttpClientModule,   // Ensure HttpClientModule is imported
        ReactiveFormsModule // Import ReactiveFormsModule to enable formGroup
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialog, useValue: { open: () => {} } },  // Mock MatDialog
        {
          provide: EstadisticasService,
          useValue: {
            getPerfilUsuario: jasmine.createSpy().and.returnValue(of({
              fotoUrl: 'https://example.com/photo.jpg',
              nombres: 'John Doe',
              apellidos: 'Doe',
              cedula: '12345',
              direccion: 'Some Address',
              telefono: '1234567890',
              email: 'john.doe@example.com',
              tipoImpresion: 'Laser',
              tipoTarjeton: 'Tipo 1'
            }))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger change detection after the data is available
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
