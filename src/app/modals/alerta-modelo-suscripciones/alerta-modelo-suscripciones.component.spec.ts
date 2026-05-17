import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaModeloSuscripcionesComponent } from './alerta-modelo-suscripciones.component';

describe('AlertaModeloSuscripcionesComponent', () => {
  let component: AlertaModeloSuscripcionesComponent;
  let fixture: ComponentFixture<AlertaModeloSuscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertaModeloSuscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertaModeloSuscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
