<<<<<<< HEAD
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(() =>{
    component = new AppComponent();
  });
=======
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
>>>>>>> master

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'an-qrcode-demo'`, () => {
    expect(component.title).toEqual('an-qrcode-demo');
=======
  it(`should have as title 'NQRCode'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('NQRCode');
>>>>>>> master
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
<<<<<<< HEAD
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('qrcode')).toBeTruthy();
=======
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('NQRCode app is running!');
>>>>>>> master
  });
});
