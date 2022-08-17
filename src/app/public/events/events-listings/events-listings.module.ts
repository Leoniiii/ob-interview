import { Routes, RouterModule } from '@angular/router';
import { EventsListingComponent } from './events-listings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCardComponent } from './components/event-card/event-card.component';

const routes: Routes = [{ path: '', component: EventsListingComponent }];
const components = [EventsListingComponent, EventCardComponent];
export class EventsModule {}
@NgModule({
  declarations: [components],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class EventsListingModule {}
