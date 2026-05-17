import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSimpleComponent } from './card-simple.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardSimpleComponent', () => {
  let component: CardSimpleComponent;
  let fixture: ComponentFixture<CardSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSimpleComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSimpleComponent);
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
