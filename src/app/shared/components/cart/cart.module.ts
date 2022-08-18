import { CartComponent } from './cart.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[CommonModule],
    declarations: [CartComponent],
    exports: [CartComponent]
})
export class CartModule { }