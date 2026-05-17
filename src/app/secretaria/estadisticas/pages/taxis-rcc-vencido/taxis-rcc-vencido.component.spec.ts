import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxisRccVencidoComponent } from './taxis-rcc-vencido.component';

describe('TaxisRccVencidoComponent', () => {
  let component: TaxisRccVencidoComponent;
  let fixture: ComponentFixture<TaxisRccVencidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisRccVencidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisRccVencidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
