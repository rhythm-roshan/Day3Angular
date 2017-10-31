import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescBarComponent } from './desc-bar.component';

describe('DescBarComponent', () => {
  let component: DescBarComponent;
  let fixture: ComponentFixture<DescBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
