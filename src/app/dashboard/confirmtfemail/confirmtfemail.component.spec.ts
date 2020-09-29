import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmtfemailComponent } from './confirmtfemail.component';

describe('ConfirmtfemailComponent', () => {
  let component: ConfirmtfemailComponent;
  let fixture: ComponentFixture<ConfirmtfemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmtfemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmtfemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
