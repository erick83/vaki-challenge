import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Vaki } from '../model/vaki.interface';
import { VakiReward } from '../model/vaki-reward.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  getVaki(): Observable<Vaki[]> {
    return this.firestore.collection<Vaki>('Vaki').valueChanges()
  }

  getRewards() {
    return this.firestore.collection<VakiReward>('Rewards').valueChanges();
  }
}
