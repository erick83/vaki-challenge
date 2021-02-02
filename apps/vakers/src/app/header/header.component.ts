import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from '../model/cart.interface';

@Component({
  selector: 'vaki-challenge-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() $cart: Observable<Cart[]>;
  unsubscribe$ = new Subject<void>();
  cartCounter = 0;

  ngOnInit(): void {
    this.$cart
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: Cart[]) => {
        this.cartCounter = data.reduce((prev, curr) => prev + curr.cant, 0)
      })
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
