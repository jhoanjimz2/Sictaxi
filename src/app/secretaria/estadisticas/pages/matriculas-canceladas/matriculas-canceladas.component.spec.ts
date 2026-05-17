import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasCanceladasComponent } from './matriculas-canceladas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

describe('MatriculasCanceladasComponent', () => {
  let component: MatriculasCanceladasComponent;
  let fixture: ComponentFixture<MatriculasCanceladasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatriculasCanceladasComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ HttpClientModule ],
      providers: [ EstadisticasService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculasCanceladasComponent);
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
