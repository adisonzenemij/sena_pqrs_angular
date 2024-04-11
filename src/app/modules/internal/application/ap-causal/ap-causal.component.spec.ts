import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ApCausalComponent } from './ap-causal.component';

describe('ApCausalComponent', () => {
  let component: ApCausalComponent;
  let fixture: ComponentFixture<ApCausalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApCausalComponent ],
      imports: [ HttpClientModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApCausalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
