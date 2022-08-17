import { SessionsListComponent } from './sessions-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [SessionsListComponent],
    imports: [CommonModule],
    exports: [SessionsListComponent]
})
export class SessionsListModule { }