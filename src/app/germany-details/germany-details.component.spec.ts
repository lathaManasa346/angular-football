import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyDetailsComponent } from './germany-details.component';

describe('GermanyDetailsComponent', () => {
  let component: GermanyDetailsComponent;
  let fixture: ComponentFixture<GermanyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GermanyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GermanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
