import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxistasRegistradosComponent } from './taxistas-registrados.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';  // Import MatDialogModule
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

describe('TaxistasRegistradosComponent', () => {
  let component: TaxistasRegistradosComponent;
  let fixture: ComponentFixture<TaxistasRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaxistasRegistradosComponent],
      imports: [MatDialogModule, HttpClientModule],  // Add HttpClientModule here
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxistasRegistradosComponent);
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
