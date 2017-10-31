import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchChildComponent } from './switch-child.component';

describe('SwitchChildComponent', () => {
  let component: SwitchChildComponent;
  let fixture: ComponentFixture<SwitchChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
