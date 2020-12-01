import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsMainPageComponent } from './eps-main-page.component';

describe('EpsMainPageComponent', () => {
  let component: EpsMainPageComponent;
  let fixture: ComponentFixture<EpsMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpsMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
