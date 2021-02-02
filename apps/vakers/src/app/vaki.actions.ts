import { createAction, props } from '@ngrx/store';
import { Vaki } from './model/vaki.interface'
import { VakiReward } from './model/vaki-reward.interface';
import { Cart } from './model/cart.interface'

export const getVakis = createAction('[Vaki Summary] Get Data');
export const storeVaki = createAction('[Vaki Summary] Store Data', props<{ payload: Vaki[] }>());

export const getRewards = createAction('[Vaki Summary] Get Rewards');
export const storeRewards = createAction('[Vaki Summary] Store Rewards', props<{ payload: VakiReward[] }>());

export const addItemCart = createAction('[Vaki Global] Add Item to Cart', props<{ key: string }>())
export const removeItemCart = createAction('[Vaki Global] Remove Item from Cart', props<{ key: string }>())
export const clearCart = createAction('[Vaki Global] Clear Cart', props<{ key: string }>())
export const updateCart = createAction('[Vaki Global] Store Cart', props<{ payload: Cart[] }>());