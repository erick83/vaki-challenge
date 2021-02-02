import { APP_BASE_HREF, Location } from '@angular/common';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LayoutComponent } from './../layout/layout.component';
import { AppRoutingModule } from './../app-routing.module';
import { SummaryComponent } from './../summary/summary.component';
import { CartComponent } from './../cart/cart.component';
import { HeaderComponent } from './../header/header.component';
import { SummaryCardComponent } from './../summary-card/summary-card.component';
import { RewardsComponent } from './../rewards/rewards.component';
import { TodayDiffPipe } from './../pipes/today-diff.pipe';
import { BrowserModule } from '@angular/platform-browser';
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
import { StoreModule } from '@ngrx/store';
import { ValidStringPipe } from '../pipes/valid-string.pipe';

describe('LayoutComponent', () => {
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
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
        StoreModule.forRoot({}),
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
