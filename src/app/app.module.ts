import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { DecoratorsDirective } from './decorators.directive';
import { DecoratorDirective } from './decorators/decorator.directive';
import { TraductorDirective } from './decorators/traductor.directive';
import { TimeTrackerDirective } from './decorators/time-tracker.directive';
//import { MethodHijackerDirective } from './decorators/method-hijacker.directive';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
