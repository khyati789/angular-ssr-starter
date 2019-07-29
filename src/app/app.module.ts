import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  TestBed.configureTestingModule({
  imports: [ SharedModule ],
  declarations: [
    AppComponent
  ],
  providers: []
});
 // declarations: [
   // AppComponent
  //],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

