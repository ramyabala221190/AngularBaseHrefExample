import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy, PlatformLocation } from '@angular/common';
import { Test2Component } from './test2/test2.component';

@Injectable()    
export class CustomHashLocationStrategy extends HashLocationStrategy {

  override prepareExternalUrl(routerPath: string): string {
    return `${this.getBaseHref()}#${routerPath}`;
    }
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:APP_BASE_HREF,
    useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
   deps:[PlatformLocation]
  },
  // only uncomment for useHash:true {
  //   provide:LocationStrategy,
  //   useClass:CustomHashLocationStrategy
  // }


],
  bootstrap: [AppComponent]
})
export class AppModule { }


