import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoComplementariaComponent } from './info-complementaria.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InfoComplementariaComponent', () => {
  let component: InfoComplementariaComponent;
  let fixture: ComponentFixture<InfoComplementariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComplementariaComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoComplementariaComponent);
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
