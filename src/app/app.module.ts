import { SessionsModule } from './components/sessions/sessions.module';
import { EventsModule } from './components/events/events.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HeaderModule,
    EventsModule,
    SessionsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
