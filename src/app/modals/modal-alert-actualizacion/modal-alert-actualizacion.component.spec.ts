import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlertActualizacionComponent } from './modal-alert-actualizacion.component';

describe('ModalAlertActualizacionComponent', () => {
  let component: ModalAlertActualizacionComponent;
  let fixture: ComponentFixture<ModalAlertActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlertActualizacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAlertActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
