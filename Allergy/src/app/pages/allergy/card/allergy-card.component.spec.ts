import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyCardComponent } from './allergy-card.component';

describe('AllergyCardComponent', () => {
  let component: AllergyCardComponent;
  let fixture: ComponentFixture<AllergyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
