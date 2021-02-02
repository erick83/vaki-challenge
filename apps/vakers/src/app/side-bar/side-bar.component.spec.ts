import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { LayoutComponent } from './../layout/layout.component';
import { AppRoutingModule } from './../app-routing.module';
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
import { ValidStringPipe } from '../pipes/valid-string.pipe';
import { SummaryComponent } from '../summary/summary.component';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SummaryComponent,
        HeaderComponent,
        SideBarComponent,
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
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    }).compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
