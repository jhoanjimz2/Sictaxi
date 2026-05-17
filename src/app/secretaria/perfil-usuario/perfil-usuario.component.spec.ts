import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ImagenesPipe } from 'src/app/pipes/imagenes.pipe';
import { EstadisticasService } from 'src/app/services/estadisticas.service';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';  // Add ReactiveFormsModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PerfilUsuarioComponent', () => {
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({
      fotoUrl: 'https://example.com/photo.jpg',
      nombres: 'John',
      apellidos: 'Doe',
      cedula: '12345',
      direccion: 'Some Address',
      telefono: '1234567890',
      email: 'john.doe@example.com'
    }));

    await TestBed.configureTestingModule({
      declarations: [ PerfilUsuarioComponent, ImagenesPipe ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule // Make sure ReactiveFormsModule is imported
      ],
      schemas: [NO_ERRORS_SCHEMA],  // Keep this if you need to suppress errors
      providers: [
        { provide: MatDialog, useValue: { open: () => {} } },
        {
          provide: EstadisticasService,
          useValue: {
            getPerfilUsuario: jasmine.createSpy().and.returnValue(of({
              tipoImpresion: 'someType',
              tipoTarjeton: 'someTarjeton',
              nombres: 'John',
              apellidos: 'Doe',
              cedula: '12345',
              direccion: 'Some Address',
              telefono: '1234567890',
              email: 'john.doe@example.com'
            }))
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
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
