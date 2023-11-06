import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalyDetailsComponent } from './italy-details.component';

describe('ItalyDetailsComponent', () => {
  let component: ItalyDetailsComponent;
  let fixture: ComponentFixture<ItalyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItalyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
