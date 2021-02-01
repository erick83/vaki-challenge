import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from '../model/cart.interface';

@Component({
  selector: 'vaki-challenge-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() $cart: Observable<Cart[]>;
  subscription: Subscription;
  cartCounter = 0;

  ngOnInit(): void {
    this.subscription = this.$cart.subscribe((data: Cart[]) => {
      this.cartCounter = data.reduce((prev, curr) => prev + curr.cant, 0)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
