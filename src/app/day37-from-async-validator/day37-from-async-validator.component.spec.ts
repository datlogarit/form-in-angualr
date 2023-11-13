import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day37FromAsyncValidatorComponent } from './day37-from-async-validator.component';

describe('Day37FromAsyncValidatorComponent', () => {
  let component: Day37FromAsyncValidatorComponent;
  let fixture: ComponentFixture<Day37FromAsyncValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day37FromAsyncValidatorComponent]
    });
    fixture = TestBed.createComponent(Day37FromAsyncValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
