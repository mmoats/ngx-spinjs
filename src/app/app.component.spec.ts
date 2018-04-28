import {TestBed, async, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {NgxSpinjsModule} from './ngx-spinjs/ngx-spinjs.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [NgxSpinjsModule]
    }).compileComponents();
  }));
  it('should call test spinner functions', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    app.showSpinner();
    app.smallSpinner();

    expect(app.spin).toBe(true);
    expect(app.smallSpin).toBe(true);

    fixture.detectChanges();

    tick(5001);

    expect(app.spin).toBe(false);
    expect(app.smallSpin).toBe(false);
  }));

  // Use app-root as hostcomponent for testing
  describe('ngx-spinjs', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
      fixture.detectChanges();
    });

    it('should start the spinner', () => {
      spyOn(component, 'onUpdate').and.callThrough();
      component.spin = true;
      component.smallSpin = true;
      fixture.detectChanges();

      expect(component.onUpdate).toHaveBeenCalled();
      expect(component.onUpdate).toHaveBeenCalledWith(true);
    });

    it('should stop the spinner', () => {
      spyOn(component, 'onUpdate').and.callThrough();
      component.spin = false;
      component.smallSpin = false;
      fixture.detectChanges();

      expect(component.onUpdate).toHaveBeenCalled();
      expect(component.onUpdate).toHaveBeenCalledWith(false);
    });
  });
});
