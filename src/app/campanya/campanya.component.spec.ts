import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanyaComponent } from './campanya.component';

describe('CampanyaComponent', () => {
  let component: CampanyaComponent;
  let fixture: ComponentFixture<CampanyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampanyaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampanyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
