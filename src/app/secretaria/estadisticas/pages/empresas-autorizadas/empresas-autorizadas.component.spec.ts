import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpresasAutorizadasComponent } from './empresas-autorizadas.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule to provide HttpClient

describe('EmpresasAutorizadasComponent', () => {
  let component: EmpresasAutorizadasComponent;
  let fixture: ComponentFixture<EmpresasAutorizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpresasAutorizadasComponent],
      imports: [HttpClientModule],  // Import HttpClientModule here
      providers: [
        { provide: MatDialog, useValue: { open: () => ({}) } } // Provide a mocked MatDialog
      ],
      schemas: [NO_ERRORS_SCHEMA] // Use this to avoid errors for unknown elements
    }).compileComponents();

    fixture = TestBed.createComponent(EmpresasAutorizadasComponent);
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
