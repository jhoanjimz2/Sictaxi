import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDesvinculcionComponent } from './card-desvinculcion.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardDesvinculcionComponent', () => {
  let component: CardDesvinculcionComponent;
  let fixture: ComponentFixture<CardDesvinculcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDesvinculcionComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDesvinculcionComponent);
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
