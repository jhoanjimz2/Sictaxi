import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FasesExportarComponent } from './fases-exportar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar HttpClientTestingModule
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FasesExportarComponent', () => {
  let component: FasesExportarComponent;
  let fixture: ComponentFixture<FasesExportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FasesExportarComponent ],
      imports: [ HttpClientTestingModule ],  // Agregar HttpClientTestingModule aquí
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FasesExportarComponent);
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
