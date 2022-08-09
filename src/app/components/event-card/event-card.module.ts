import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [EventCardComponent],
    imports: [CommonModule],
    exports: [EventCardComponent]
})
export class EventCardModule { }