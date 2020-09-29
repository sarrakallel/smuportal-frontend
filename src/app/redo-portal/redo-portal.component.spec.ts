import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedoPortalComponent } from './redo-portal.component';

describe('RedoPortalComponent', () => {
  let component: RedoPortalComponent;
  let fixture: ComponentFixture<RedoPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedoPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
