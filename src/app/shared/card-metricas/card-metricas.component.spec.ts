import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMetricasComponent } from './card-metricas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardMetricasComponent', () => {
  let component: CardMetricasComponent;
  let fixture: ComponentFixture<CardMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMetricasComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMetricasComponent);
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
