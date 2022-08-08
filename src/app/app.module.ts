import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { HeaderComponent } from './components/header/header.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { SessionsListComponent } from './components/sessions-list/sessions-list.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventCardComponent,
    HeaderComponent,
    SessionsComponent,
    SessionsListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
