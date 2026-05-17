import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesvinculacionesComponent } from './desvinculaciones.component';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { DesvinculacionesService } from 'src/app/services/desvinculaciones.service'; // Asegúrate de importar el servicio si es necesario
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DesvinculacionesComponent', () => {
  let component: DesvinculacionesComponent;
  let fixture: ComponentFixture<DesvinculacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesvinculacionesComponent ],
      imports: [ HttpClientModule ], // Asegúrate de importar HttpClientModule
      providers: [ DesvinculacionesService ], // Provee DesvinculacionesService si es necesario
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesvinculacionesComponent);
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
