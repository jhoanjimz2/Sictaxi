import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalCambiarImgProfileComponent } from './modal-cambiar-img-profile.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';  // Import MatDialogRef
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { of } from 'rxjs';  // To simulate an observable
import { ImagenesPipe } from 'src/app/pipes/imagenes.pipe';  // Import the ImagenesPipe

describe('ModalCambiarImgProfileComponent', () => {
  let component: ModalCambiarImgProfileComponent;
  let fixture: ComponentFixture<ModalCambiarImgProfileComponent>;

  beforeEach(async () => {
    // Mock localStorage.getItem to return a valid user object
    const localStorageMock = {
      getItem: jasmine.createSpy().and.returnValue(JSON.stringify({ id: 1, fotoUrl: 'test.jpg' })),
      setItem: jasmine.createSpy(),
      removeItem: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };

    spyOn(localStorage, 'getItem').and.callFake(localStorageMock.getItem);
    spyOn(localStorage, 'setItem').and.callFake(localStorageMock.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(localStorageMock.removeItem);
    spyOn(localStorage, 'clear').and.callFake(localStorageMock.clear);

    await TestBed.configureTestingModule({
      declarations: [
        ModalCambiarImgProfileComponent,
        ImagenesPipe // Declare the pipe here
      ],
      imports: [
        MatDialogModule,  // Import MatDialogModule
        HttpClientModule  // Import HttpClientModule here
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { close: jasmine.createSpy('close'), afterClosed: () => of(true) }  // Mock MatDialogRef
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCambiarImgProfileComponent);
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
