import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';
import { Http } from '@angular/http';

import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  userProfile: any;
  signed_in: boolean;
  rankings: Array<any>;
  loading: boolean;

  constructor(public navCtrl: NavController, private facebook: Facebook, private http: Http) {

    this.loading = false;
    this.rankings = new Array();

    this.rankings.push({
      name: 'Luan',
      points: 200
    },{
      name: 'Pedro',
      points: 150
    },{
      name: 'Fofo',
      points: 100
    });
  }

  ionViewDidEnter() {

    this.signed_in = MyApp.signed_in;
    this.fetchRankings();
  }

  signIn = () => {

    this.facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);

        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log("Firebase success: " + JSON.stringify(success));
            this.userProfile = success;
            MyApp.signed_in = true;
        })
        .catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
            MyApp.signed_in = false;
        });

    }).catch((error) => { console.log(error) });
  }

  fetchRankings = () => {
    this.loading = true;
    this.rankings.splice(0, this.rankings.length);
    this.http.get('http://192.168.3.108:3003/rank').map(res => res.json()).toPromise().then((response) => {
      console.log(response);
      this.loading = false;
      this.rankings.push(...response);
    });   
  }

}
