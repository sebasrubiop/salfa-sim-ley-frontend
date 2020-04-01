import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { APP_BASE_HREF } from '@angular/common';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [
    // { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
