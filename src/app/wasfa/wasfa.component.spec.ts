import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasfaComponent } from './wasfa.component';

describe('WasfaComponent', () => {
  let component: WasfaComponent;
  let fixture: ComponentFixture<WasfaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasfaComponent]
    });
    fixture = TestBed.createComponent(WasfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
