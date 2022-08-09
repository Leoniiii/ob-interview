import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'events', loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule) },
  { path: 'sessions', loadChildren: () => import('./components/sessions/sessions.module').then(m => m.SessionsModule) },
  { path: '**', redirectTo: 'events', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
