import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagreGeomorphologieComponent } from './cagre-geomorphologie.component';

describe('CagreGeomorphologieComponent', () => {
  let component: CagreGeomorphologieComponent;
  let fixture: ComponentFixture<CagreGeomorphologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagreGeomorphologieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CagreGeomorphologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
