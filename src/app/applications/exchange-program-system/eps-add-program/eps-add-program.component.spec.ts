import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsAddProgramComponent } from './eps-add-program.component';

describe('EpsAddProgramComponent', () => {
  let component: EpsAddProgramComponent;
  let fixture: ComponentFixture<EpsAddProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpsAddProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsAddProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
