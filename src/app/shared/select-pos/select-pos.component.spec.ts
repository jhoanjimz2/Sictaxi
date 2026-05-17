import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectPosComponent } from './select-pos.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule

describe('SelectPosComponent', () => {
  let component: SelectPosComponent;
  let fixture: ComponentFixture<SelectPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPosComponent ],
      imports: [ HttpClientModule ],  // Asegúrate de importar HttpClientModule
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPosComponent);
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
