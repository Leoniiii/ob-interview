import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './components/cart/cart.module';
import { HeaderModule } from './components/header/header.module';

const components = [
  CartModule,
  HeaderModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...components
  ],
  exports: [
    components
  ]
})
export class SharedModule { }
