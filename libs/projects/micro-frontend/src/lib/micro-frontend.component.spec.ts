import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontendComponent } from './micro-frontend.component';

describe('MicroFrontendComponent', () => {
  let component: MicroFrontendComponent;
  let fixture: ComponentFixture<MicroFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroFrontendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
