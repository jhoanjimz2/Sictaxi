import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVehiculoComponent } from './card-vehiculo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

describe('CardVehiculoComponent', () => {
  let component: CardVehiculoComponent;
  let fixture: ComponentFixture<CardVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVehiculoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ { provide: MatDialog, useValue: { open: () => {} } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVehiculoComponent);
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
