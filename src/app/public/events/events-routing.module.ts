import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./events-listings/events-listings.module').then(
        (m) => m.EventsListingModule
      ),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./event-detail/event-detail.module').then(
        (m) => m.EventDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
