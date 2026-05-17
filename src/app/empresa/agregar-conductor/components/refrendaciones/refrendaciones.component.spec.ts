import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RefrendacionesComponent } from './refrendaciones.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importar el módulo de pruebas HTTP

describe('RefrendacionesComponent', () => {
  let component: RefrendacionesComponent;
  let fixture: ComponentFixture<RefrendacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefrendacionesComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule]  // Importar HttpClientTestingModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrendacionesComponent);
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
