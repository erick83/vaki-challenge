import { APP_BASE_HREF, Location } from '@angular/common';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { RewardsComponent } from './rewards/rewards.component';
import { TodayDiffPipe } from './pipes/today-diff.pipe';
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
import { provideMockStore } from '@ngrx/store/testing';
import { ValidStringPipe } from './pipes/valid-string.pipe';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  const initialState = {
    reward: {
      title: 'Test',
      description: '',
      visible: true,
      img: '',
      key: '1',
      value: '0000000',
      delivery_date: 1612282311,
      claimed: 0,
      quantityAvailable: 20,
    }
   };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SummaryComponent,
        HeaderComponent,
        LayoutComponent,
        SummaryCardComponent,
        RewardsComponent,
        CartComponent,
        ValidStringPipe,
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
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        provideMockStore({initialState})
      ],
    }).compileComponents()

    router = TestBed.inject(Router)
    location = TestBed.inject(Location)
    router.initialNavigation()
  });

  it('should create the root component', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "" redirects you to /summary', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/summary')
    })
  }))
});
