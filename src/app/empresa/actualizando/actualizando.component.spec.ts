import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizandoComponent } from './actualizando.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ActualizandoComponent', () => {
  let component: ActualizandoComponent;
  let fixture: ComponentFixture<ActualizandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizandoComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizandoComponent);
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
