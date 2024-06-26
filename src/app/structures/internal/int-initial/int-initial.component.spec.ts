import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IntInitialComponent } from './int-initial.component';

describe('IntInitialComponent', () => {
  let component: IntInitialComponent;
  let fixture: ComponentFixture<IntInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntInitialComponent ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
