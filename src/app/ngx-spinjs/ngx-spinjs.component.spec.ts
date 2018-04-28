import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SimpleChange} from '@angular/core';

import {NgxSpinjsComponent} from './ngx-spinjs.component';

describe('NgxSpinjsComponent', () => {
  let component: NgxSpinjsComponent;
  let fixture: ComponentFixture<NgxSpinjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSpinjsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSpinjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should bind backdrop @Input', () => {
    const changes: any = {backdrop: new SimpleChange(undefined, true, true)};
    component.ngOnChanges(changes);
    fixture.detectChanges();

    // check for overlay class
    // let overlay = fixture.debugElement.
  });

  it('should toggle spinner', () => {
    const changes: any = {toggleSpinner: new SimpleChange(undefined, true, true)};
    component.ngOnChanges(changes);
    fixture.detectChanges();

    const newchanges: any = {toggleSpinner: new SimpleChange(true, false, false)};
    component.ngOnChanges(newchanges);
    fixture.detectChanges();
  });

  it('should reset spinner onDestroy', () => {
    fixture.destroy();
  });
});
