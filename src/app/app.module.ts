import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

import { GamesProvider } from '../providers/games/games';
import { DesejosProvider } from '../providers/desejos/desejos';

import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCJOOZK9PqXuPcPjERmXbGKAHtZ74-jWhY",
      authDomain: "teste-f97b5.firebaseapp.com",
      databaseURL: "https://teste-f97b5.firebaseio.com",
      projectId: "teste-f97b5",
      storageBucket: "teste-f97b5.appspot.com",
      messagingSenderId: "870265824740"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GamesProvider,
    DesejosProvider
  ]
})
export class AppModule {}
