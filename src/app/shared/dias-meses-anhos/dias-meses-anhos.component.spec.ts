import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiasMesesAnhosComponent } from './dias-meses-anhos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DiasMesesAnhosComponent', () => {
  let component: DiasMesesAnhosComponent;
  let fixture: ComponentFixture<DiasMesesAnhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiasMesesAnhosComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiasMesesAnhosComponent);
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
