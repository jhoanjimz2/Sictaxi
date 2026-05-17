import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxisRceVencidoComponent } from './taxis-rce-vencido.component';

describe('TaxisRceVencidoComponent', () => {
  let component: TaxisRceVencidoComponent;
  let fixture: ComponentFixture<TaxisRceVencidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxisRceVencidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxisRceVencidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
