import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { baseURL } from '../shared/baseurl';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LeaderProvider } from '../providers/leader/leader';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { DishProvider } from '../providers/dish/dish';
import { PromotionProvider } from '../providers/promotion/promotion';
import { FavoriteProvider } from '../providers/favorite/favorite';
import { FavoritesPage } from '../pages/favorites/favorites';
import { MenuPage } from '../pages/menu/menu';
import { DishdetailPage } from '../pages/dishdetail/dishdetail';
import { ReservationPage } from '../pages/reservation/reservation';
import { CommentPage } from '../pages/comment/comment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    FavoritesPage,
    MenuPage,
    DishdetailPage,
    ReservationPage,
    CommentPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    ContactPage,
    FavoritesPage,
    MenuPage,
    DishdetailPage,
    ReservationPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LeaderProvider,
    ProcessHttpmsgProvider,
    {provide: 'BaseURL', useValue: baseURL},
    DishProvider,
    PromotionProvider,
    FavoriteProvider
  ]
})
export class AppModule {}
