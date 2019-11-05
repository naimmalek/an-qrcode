# an-qrcode
`an-qrcode` is Angular6-8 QR Code library to generate QR Codes in Angular 6/7/8+ app.

## Demo App

You can find demo app here 
[github.com/naimmalek/an-qrcode-sample-app](https://naimmalek.github.io/an-qrcode-sample-app/).

## Install with Angular 8

```
# Angular 6/7/8+
npm install an-qrcode --save
```

## Basic Usage

### Import the module and add it to your imports section in your main AppModule:

```
// Main Module File: app.module.ts
import { AnQrcodeModule } from 'an-qrcode';

@NgModule({
declarations: [
  AppComponent
],
imports: [
  AnQrcodeModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
```

## Examples: an-qrcode

### Generate a QR Code from a string

here is sample code for generate qrcode

```
<qrcode [level]="1" [qrvalue]="'QR Code String'"></qrcode>
```


## Parameters

| Attribute        | Type           | Default | Description  |
| ------------- |-------------| -----|------------|
| level | Number | 1    | QR ECC level (1, 2, 3, 4) |
| qrvalue      | String | '' | Your String |
| width      | Number | 200     | Width (any value) |
| height      | Number | 200     | Height (any value) |


## License
MIT License

Copyright (c) 2019 - present [Naim Malek (naimmalek.github.io)](https://naimmalek.github.io/)
