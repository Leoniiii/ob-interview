import { CommonModule } from '@angular/common';
import { EventCardComponent } from './event-card.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [EventCardComponent],
    imports: [CommonModule, RouterModule],
    exports: [EventCardComponent]
})
export class EventCardModule { }