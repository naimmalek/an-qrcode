import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnQrcodeComponent } from './an-qrcode.component';

describe('AnQrcodeComponent', () => {
  let component: AnQrcodeComponent;
  let fixture: ComponentFixture<AnQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
