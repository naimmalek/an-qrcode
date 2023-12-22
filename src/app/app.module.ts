import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { DeviceDetectorService } from 'ngx-device-detector';
import { AppComponent } from './app.component';
import { AnQrcodeModule } from 'projects/an-qrcode/src/public-api';
// import { AnQrcodeModule } from 'an-qrcode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // DeviceDetectorService.forRoot(),
    AnQrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
