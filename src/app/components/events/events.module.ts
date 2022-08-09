import { EventCardModule } from './../event-card/event-card.module';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: EventsComponent }
]
@NgModule({
    declarations: [EventsComponent],
    imports: [RouterModule.forChild(routes), CommonModule, EventCardModule],
    exports: [EventsComponent]
})
export class EventsModule { }