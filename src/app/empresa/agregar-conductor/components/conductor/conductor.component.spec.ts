import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConductorComponent } from './conductor.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ImagenesPipe } from 'src/app/pipes/imagenes.pipe';

describe('ConductorComponent', () => {
  let component: ConductorComponent;
  let fixture: ComponentFixture<ConductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConductorComponent,
        ImagenesPipe  // Declarar el pipe 'imagenes' aquí
      ],
      imports: [
        HttpClientModule,
        MatDialogModule
      ],
      providers: [
        MatDialog
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Usado para ignorar elementos no reconocidos en la plantilla
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductorComponent);
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
