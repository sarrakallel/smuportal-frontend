import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGuideComponent } from './color-guide.component';

describe('ColorGuideComponent', () => {
  let component: ColorGuideComponent;
  let fixture: ComponentFixture<ColorGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
