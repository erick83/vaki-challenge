import { APP_BASE_HREF, Location } from '@angular/common';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './../app.component';
import { LayoutComponent } from './../layout/layout.component';
import { AppRoutingModule } from './../app-routing.module';
import { SummaryComponent } from './../summary/summary.component';
import { CartComponent } from './../cart/cart.component';
import { HeaderComponent } from './../header/header.component';
import { SideBarComponent } from './../side-bar/side-bar.component';
import { SummaryCardComponent } from './../summary-card/summary-card.component';
import { RewardsComponent } from './../rewards/rewards.component';
import { TodayDiffPipe } from './../pipes/today-diff.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { vakiCartReducer, vakiReducer, vakiRewardReducer } from '../vaki.reducer';
import { StoreModule } from '@ngrx/store';

describe('LayoutComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SummaryComponent,
        HeaderComponent,
        SideBarComponent,
        LayoutComponent,
        SummaryCardComponent,
        RewardsComponent,
        CartComponent,
        TodayDiffPipe,
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
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents()

  });

  beforeEach(() => {
    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    router.initialNavigation()
  })

  it('should create the root component', () => {
    const fixture = TestBed.createComponent(LayoutComponent)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "" redirects you to /summary', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/summary')
    })
  }))

  it('navigate to "/cart"', fakeAsync(() => {
    router.navigate(['cart']).then(() => {
      expect(location.path()).toBe('/cart')
    })
  }))
});
