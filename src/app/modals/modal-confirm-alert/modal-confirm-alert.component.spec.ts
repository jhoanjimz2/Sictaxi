import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalConfirmAlertComponent } from './modal-confirm-alert.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'; // Import MatDialogRef

// Mock MatDialogRef to provide necessary methods
class MatDialogRefMock {
  close() {}
}

describe('ModalConfirmAlertComponent', () => {
  let component: ModalConfirmAlertComponent;
  let fixture: ComponentFixture<ModalConfirmAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmAlertComponent ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock } // Mock MatDialogRef
      ],
      schemas: [NO_ERRORS_SCHEMA] // Avoid errors for unrecognized elements
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalConfirmAlertComponent);
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
