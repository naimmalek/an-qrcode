# an-qrcode
`an-qrcode` is simple angular library to generate QR Codes in Angular 6/7/8/9/10 app app with support for AOT and the Ivy compiler.

[![npm version](https://badge.fury.io/js/an-qrcode.svg)](https://badge.fury.io/js/an-qrcode)

## Demo App

You can find demo app here 
[github.com/naimmalek/an-qrcode-sample-app](https://naimmalek.github.io/an-qrcode-sample-app/).

## Installation

```
# Angular 6/7/8/9/10
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
| size      | Number | 200     | (Width/Height value) |


## License
MIT License

Copyright (c) 2019 - present [Naim Malek (naimmalek.github.io)](https://naimmalek.github.io/)