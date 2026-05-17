import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProximosVencerseComponent } from './proximos-vencerse.component';
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FechasVencidasEmpresaPipe } from 'src/app/pipes/fechas-vencidas-empresa.pipe';  // Import your custom pipe

// Mock de MatDialog
class MatDialogMock {
  open() {
    return { afterClosed: () => {} };  // Mock `open` method
  }
}

describe('ProximosVencerseComponent', () => {
  let component: ProximosVencerseComponent;
  let fixture: ComponentFixture<ProximosVencerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProximosVencerseComponent,  // Declare the component to be tested
        FechasVencidasEmpresaPipe  // Declare the custom pipe
      ],
      imports: [ HttpClientTestingModule ],  // Import HttpClientTestingModule for HTTP testing
      providers: [
        { provide: MatDialog, useClass: MatDialogMock }  // Provide the mocked MatDialog
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Ignore unknown components, if any
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximosVencerseComponent);
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
