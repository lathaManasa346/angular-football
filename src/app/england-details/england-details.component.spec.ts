import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglandDetailsComponent } from './england-details.component';

describe('EnglandDetailsComponent', () => {
  let component: EnglandDetailsComponent;
  let fixture: ComponentFixture<EnglandDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglandDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
