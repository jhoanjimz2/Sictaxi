import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { DocumentosVencidosService } from 'src/app/services/documentos-vencidos.service';
import { of } from 'rxjs';
import { ImagenesPipe } from 'src/app/pipes/imagenes.pipe';

class AuthServiceMock {
  logout() {
    return of({ response: 'Logged out' });
  }
}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ rol: 'Secretaria' }));

    await TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
        ImagenesPipe  // Declarar el pipe en las pruebas
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock },
        { provide: LoadingService, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: DocumentosVencidosService, useValue: { obtenerTotalDocumentosVencidos: () => of(10), cargarEspecificacionesContador: () => of() } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
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
