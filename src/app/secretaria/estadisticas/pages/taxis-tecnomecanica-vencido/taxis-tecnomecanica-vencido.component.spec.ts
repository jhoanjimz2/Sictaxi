import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxisTecnomecanicaVencidoComponent } from './taxis-tecnomecanica-vencido.component';

describe('TaxisTecnomecanicaVencidoComponent', () => {
  let component: TaxisTecnomecanicaVencidoComponent;
  let fixture: ComponentFixture<TaxisTecnomecanicaVencidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisTecnomecanicaVencidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisTecnomecanicaVencidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
