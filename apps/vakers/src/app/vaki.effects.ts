import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, takeLast, take } from 'rxjs/operators';

import { FirestoreService } from './services/firestore.service';
import { getVakis, storeVaki, getRewards, storeRewards, getCart, storeCart  } from './vaki.actions'

@Injectable()
export class VakiEffects {

  loadVakis$ = createEffect(() => this.actions$.pipe(
    ofType(getVakis),
    mergeMap(() => this.firestoreService.getVaki()
      .pipe(
        map(vakis => storeVaki({ payload: vakis })),
        catchError(() => EMPTY)
      )),
      tap(action => {
        this.store.dispatch(action)
      })
    )
  );

  loadRewards$ = createEffect(() => this.actions$.pipe(
    ofType(getRewards),
    mergeMap(() => this.firestoreService.getRewards()
      .pipe(
        map(rewards => storeRewards({ payload: rewards })),
        catchError(() => EMPTY)
      )),
      tap(action => {
        this.store.dispatch(action)
      })
    )
  );

  loadCarts$ = createEffect(() => this.actions$.pipe(
    ofType(getCart),
    mergeMap(() => this.firestoreService.getCart()
      .pipe(
        map(cart => storeCart({ payload: cart })),
        catchError(() => EMPTY)
      )),
      tap(action => {
        this.store.dispatch(action)
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private firestoreService: FirestoreService
  ) {}
}