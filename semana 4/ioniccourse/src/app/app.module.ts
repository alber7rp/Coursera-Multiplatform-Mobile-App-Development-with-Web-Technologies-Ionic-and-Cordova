import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { baseURL } from '../shared/baseurl';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {EmailComposer} from '@ionic-native/email-composer';
import {SocialSharing} from '@ionic-native/social-sharing';
import {Camera} from '@ionic-native/camera';
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
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Network } from '@ionic-native/network';
import { CallNumber } from '@ionic-native/call-number';

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
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    CommentPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    EmailComposer,
    LeaderProvider,
    ProcessHttpmsgProvider,
    {provide: 'BaseURL', useValue: baseURL},
    DishProvider,
    PromotionProvider,
    FavoriteProvider,
    SocialSharing,
    Camera,
    Network,
    CallNumber
  ]
})
export class AppModule {}
