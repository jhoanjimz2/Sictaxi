import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaPoliticasComponent } from './alerta-politicas.component';

describe('AlertaPoliticasComponent', () => {
  let component: AlertaPoliticasComponent;
  let fixture: ComponentFixture<AlertaPoliticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaPoliticasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaPoliticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
