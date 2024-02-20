import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikamComponent } from './hikam.component';

describe('HikamComponent', () => {
  let component: HikamComponent;
  let fixture: ComponentFixture<HikamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HikamComponent]
    });
    fixture = TestBed.createComponent(HikamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
