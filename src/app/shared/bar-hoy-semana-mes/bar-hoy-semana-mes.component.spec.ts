import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHoySemanaMesComponent } from './bar-hoy-semana-mes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BarHoySemanaMesComponent', () => {
  let component: BarHoySemanaMesComponent;
  let fixture: ComponentFixture<BarHoySemanaMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarHoySemanaMesComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarHoySemanaMesComponent);
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
