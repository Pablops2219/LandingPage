import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposaComponent } from './proposa.component';

describe('ProposaComponent', () => {
  let component: ProposaComponent;
  let fixture: ComponentFixture<ProposaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
