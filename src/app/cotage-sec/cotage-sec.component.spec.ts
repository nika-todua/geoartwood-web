import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotageSecComponent } from './cotage-sec.component';

describe('CotageSecComponent', () => {
  let component: CotageSecComponent;
  let fixture: ComponentFixture<CotageSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotageSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotageSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
