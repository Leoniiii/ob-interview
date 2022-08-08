import { EventCardModule } from './../event-card/event-card.module';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { NgModule } from "@angular/core";
const routes: Routes = [
    { path: '', component: EventsComponent }
]
@NgModule({
    declarations: [EventsComponent],
    imports: [RouterModule.forChild(routes), EventCardModule],
    exports: [EventsComponent]
})
export class EventsModule { }