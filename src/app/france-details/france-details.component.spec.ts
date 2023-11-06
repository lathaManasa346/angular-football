import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceDetailsComponent } from './france-details.component';

describe('FranceDetailsComponent', () => {
  let component: FranceDetailsComponent;
  let fixture: ComponentFixture<FranceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
