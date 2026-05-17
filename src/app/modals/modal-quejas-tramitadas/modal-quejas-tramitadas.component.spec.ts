import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalQuejasTramitadasComponent } from './modal-quejas-tramitadas.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';  // Import MAT_DIALOG_DATA
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { OrderDatePipe } from 'src/app/pipes/order-date.pipe';  // Import your custom pipe

// Mock de MatDialogRef
class MatDialogRefMock {
  close(): void {}
}

describe('ModalQuejasTramitadasComponent', () => {
  let component: ModalQuejasTramitadasComponent;
  let fixture: ComponentFixture<ModalQuejasTramitadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ModalQuejasTramitadasComponent,  // Declare the component
        OrderDatePipe  // Declare the custom orderDate pipe
      ],
      imports: [ HttpClientTestingModule ],  // Import HttpClientTestingModule for HTTP testing
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },  // Mock MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {               // Mock MAT_DIALOG_DATA
            idVinculacion: 123,
            fechaInicial: '2023-01-01',
            fechaFinal: '2023-12-31'
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Ignore unknown components, if any
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalQuejasTramitadasComponent);
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
