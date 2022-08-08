import { CartModule } from './../cart/cart.module';
import { SessionsListModule } from './../sessions-list/sessions-list.module';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: SessionsComponent }
]
@NgModule({
    declarations: [SessionsComponent],
    exports: [SessionsComponent],
    imports: [RouterModule.forChild(routes), SessionsListModule, CartModule]
})
export class SessionsModule { }