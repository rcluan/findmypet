import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  static signed_in: boolean;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
        apiKey: "AIzaSyBqk8AfUfv_D3DEA-nEjkq0HyhQuCaNIfk",
        authDomain: "jsday2017.firebaseapp.com",
        databaseURL: "https://jsday2017.firebaseio.com",
        projectId: "jsday2017",
        storageBucket: "jsday2017.appspot.com",
        messagingSenderId: "904449067804"
    });
    firebase.auth().onAuthStateChanged(auth => {
      
      console.log(auth);
      
      if(auth) {
        MyApp.signed_in = true;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
