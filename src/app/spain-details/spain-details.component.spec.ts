import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpainDetailsComponent } from './spain-details.component';

describe('SpainDetailsComponent', () => {
  let component: SpainDetailsComponent;
  let fixture: ComponentFixture<SpainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpainDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
