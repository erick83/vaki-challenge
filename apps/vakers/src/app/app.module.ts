import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { AngularFireModule } from '@angular/fire'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment'
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VakiEffects } from './vaki.effects';
import { vakiReducer, vakiRewardReducer, vakiCartReducer } from './vaki.reducer';
import { CartComponent } from './cart/cart.component';
import { TodayDiffPipe } from './pipes/today-diff.pipe';
import { ValidStringPipe } from './pipes/valid-string.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    HeaderComponent,
    LayoutComponent,
    SummaryCardComponent,
    RewardsComponent,
    CartComponent,
    TodayDiffPipe,
    ValidStringPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({
      vaki: vakiReducer,
      reward: vakiRewardReducer,
      cart: vakiCartReducer,
     }),
    AngularFireModule.initializeApp(environment.firebase),
    EffectsModule.forRoot([VakiEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
