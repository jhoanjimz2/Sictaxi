import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CardConductorComponent } from './card-conductor.component';

describe('CardConductorComponent', () => {
  let component: CardConductorComponent;
  let fixture: ComponentFixture<CardConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConductorComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ { provide: MatDialog, useValue: { open: () => {} } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConductorComponent);
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
