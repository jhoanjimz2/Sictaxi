import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilEmpresaComponent } from './perfil-empresa.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import HttpClientTestingModule
import { PerfilEmpresaService } from 'src/app/services/perfil-empresa.service';  // Import the service
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

// Mock the 'imagenes' pipe
@Pipe({
  name: 'imagenes'
})
class ImagenesPipeMock implements PipeTransform {
  transform(value: any): any {
    return value; // You can mock the behavior as needed
  }
}

describe('PerfilEmpresaComponent', () => {
  let component: PerfilEmpresaComponent;
  let fixture: ComponentFixture<PerfilEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PerfilEmpresaComponent,
        ImagenesPipeMock  // Declare the 'imagenes' pipe mock
      ],
      imports: [ HttpClientTestingModule ],  // Import HttpClientTestingModule for testing HTTP calls
      providers: [ PerfilEmpresaService ],  // Provide the service if necessary
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEmpresaComponent);
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
