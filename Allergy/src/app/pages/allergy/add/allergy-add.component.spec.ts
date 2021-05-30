import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyAddComponent } from './allergy-add.component';

describe('AllergyAddComponent', () => {
  let component: AllergyAddComponent;
  let fixture: ComponentFixture<AllergyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergyAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
