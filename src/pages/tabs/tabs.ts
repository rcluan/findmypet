import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  

  constructor(private camera: Camera, private http: Http) {

  }

  openCamera = () => {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = imageData;
      this.http.post('http://192.168.3.108:3003/detect', {
        image: base64Image,
        lastSeen: new Date().toString(),
      }).map(res => res.json()).toPromise().then(response => {
        
        if(response.isPet) {
          alert('Imagem válida');
        } else {
          alert('Imagem inválida');
        }
      }).catch(err => {
        alert('Erro ao enviar a imagem');
      });
    }, (err) => {
    // Handle error
    });
  }
}
