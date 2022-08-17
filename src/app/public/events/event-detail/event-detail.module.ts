import { CartModule } from '../../../shared/components/cart/cart.module';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from './event-detail.component';
import { NgModule } from '@angular/core';
import { SessionsListComponent } from './components/sessions-list/sessions-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [{ path: '', component: EventDetailComponent }];
const components = [EventDetailComponent, SessionsListComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule.forChild(routes), CartModule],
})
export class EventDetailModule {}
