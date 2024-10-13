import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OumaComponent } from './ouma.component';

describe('OumaComponent', () => {
  let component: OumaComponent;
  let fixture: ComponentFixture<OumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OumaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
