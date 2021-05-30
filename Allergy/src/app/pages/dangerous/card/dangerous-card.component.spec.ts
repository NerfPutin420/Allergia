import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerousCardComponent } from './dangerous-card.component';

describe('DangerousCardComponent', () => {
  let component: DangerousCardComponent;
  let fixture: ComponentFixture<DangerousCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DangerousCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerousCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
