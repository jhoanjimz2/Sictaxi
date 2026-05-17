import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownFooterComponent } from './countdown-footer.component';

describe('CountdownFooterComponent', () => {
  let component: CountdownFooterComponent;
  let fixture: ComponentFixture<CountdownFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
