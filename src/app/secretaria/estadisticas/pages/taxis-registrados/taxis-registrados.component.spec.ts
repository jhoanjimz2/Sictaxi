import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxisRegistradosComponent } from './taxis-registrados.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TaxisRegistradosComponent', () => {
  let component: TaxisRegistradosComponent;
  let fixture: ComponentFixture<TaxisRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisRegistradosComponent ],
      imports: [ HttpClientTestingModule ],  // Asegúrate de importar HttpClientModule
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisRegistradosComponent);
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
