import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions'
import { Observable } from 'rxjs';

import { Vaki } from '../model/vaki.interface';
import { VakiReward } from '../model/vaki-reward.interface';
import { environment } from '../../environments/environment'
import { Cart } from '../model/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore,
    private functions: AngularFireFunctions
  ) {
    if (!environment.production) {
      this.functions.useEmulator('localhost', 5001);
    }
  }


  getVaki(): Observable<Vaki[]> {
    return this.firestore.collection<Vaki>('Vaki').valueChanges()
  }

  getRewards() {
    return this.firestore.collection<VakiReward>('Rewards').valueChanges();
  }

  getCart() {
    return this.firestore.collection<Cart>('Cart').valueChanges();
  }

  addToCart(key: string) {
    const _addToCart = this.functions.httpsCallable('addToCart');
    return _addToCart({ reward_key: key });
  }
}
