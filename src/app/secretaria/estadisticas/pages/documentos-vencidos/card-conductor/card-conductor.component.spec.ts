import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConductorComponent } from './card-conductor.component';

describe('CardConductorComponent', () => {
  let component: CardConductorComponent;
  let fixture: ComponentFixture<CardConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConductorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
