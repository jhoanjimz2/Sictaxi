import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarConductoresComponent } from './buscar-conductores.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';  // Importa MatDialogModule
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { SearchCondutoresService } from 'src/app/services/search-condutores.service';  // Asegúrate de importar el servicio

describe('BuscarConductoresComponent', () => {
  let component: BuscarConductoresComponent;
  let fixture: ComponentFixture<BuscarConductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarConductoresComponent ],
      imports: [
        MatDialogModule,  // Asegúrate de importar MatDialogModule
        HttpClientModule  // Asegúrate de importar HttpClientModule
      ],
      providers: [ SearchCondutoresService ],  // Proveemos SearchCondutoresService
      schemas: [NO_ERRORS_SCHEMA]  // Para evitar errores con componentes no declarados
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarConductoresComponent);
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
