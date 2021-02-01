import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';

import { Cart } from '../model/cart.interface';
import { getCart } from '../vaki.actions'

@Component({
  selector: 'vaki-challenge-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  $cart: Observable<Cart[]>

  constructor(private store: Store<{ cart: Cart[] }>) { }

  ngOnInit(): void {
    this.store.dispatch(getCart())
    this.$cart = this.store.select('cart')
  }

}
