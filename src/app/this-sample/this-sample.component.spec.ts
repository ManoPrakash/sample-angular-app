import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisSampleComponent } from './this-sample.component';

describe('ThisSampleComponent', () => {
  let component: ThisSampleComponent;
  let fixture: ComponentFixture<ThisSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
