import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColletctionsComponent } from './colletctions.component';

describe('ColletctionsComponent', () => {
  let component: ColletctionsComponent;
  let fixture: ComponentFixture<ColletctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColletctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColletctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
