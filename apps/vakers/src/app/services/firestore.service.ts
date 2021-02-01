import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions'

import { Vaki } from '../model/vaki.interface';
import { VakiReward } from '../model/vaki-reward.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore,
    private functions: AngularFireFunctions
  ) { }


  getVaki(): Observable<Vaki[]> {
    return this.firestore.collection<Vaki>('Vaki').valueChanges()
  }

  getRewards() {
    return this.firestore.collection<VakiReward>('Rewards').valueChanges();
  }

  addToCart() {
    if (!environment.production) {
      this.functions.useEmulator('localhost', 5001);
    }
    const _addToCart = this.functions.httpsCallable('addToCart');
    return _addToCart({ data: 'Testing' });
  }
}
