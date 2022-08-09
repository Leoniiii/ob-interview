import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


const routes: Routes = [
  { path: 'events', loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule) },
  { path: 'sessions', loadChildren: () => import('./components/sessions/sessions.module').then(m => m.SessionsModule) },
  { path: '**', redirectTo: 'events', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
