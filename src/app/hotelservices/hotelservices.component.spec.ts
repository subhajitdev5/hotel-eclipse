import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelservicesComponent } from './hotelservices.component';

describe('HotelservicesComponent', () => {
  let component: HotelservicesComponent;
  let fixture: ComponentFixture<HotelservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelservicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
