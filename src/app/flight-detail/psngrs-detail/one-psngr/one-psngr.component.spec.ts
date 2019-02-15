/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnePsngrComponent } from './one-psngr.component';

describe('OnePsngrComponent', () => {
  let component: OnePsngrComponent;
  let fixture: ComponentFixture<OnePsngrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePsngrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePsngrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
