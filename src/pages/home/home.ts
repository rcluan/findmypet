import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public itens: Array < any > ;
  public url: string;
  constructor(public navCtrl: NavController) {
    this.itens = new Array();
    this.itens.push({name:"Bolota",
    url:"http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"
    ,subtitle:"olaaa"});
    this.itens.push({name:"Wolf",
    url:"http://s2.glbimg.com/T4OzkCICosdMDCrr3a1MgmCrNFarBlJ0PJWCa37oDLdIoz-HdGixxa_8qOZvMp3w/s.glbimg.com/jo/g1/f/original/2012/11/26/000_del6172754.jpg"
    ,subtitle:"olaaa"});
    this.itens.push({name:"Meme",
    url:"http://1.bp.blogspot.com/-RZz1vVmVh-Q/Ukt0vYJCmpI/AAAAAAAAAFs/UxWeLPa_V-c/s1600/vira-lata.jpg"
    ,subtitle:"olaaa"});
    this.itens.push({name:"Cao de Guarda",
    url:"http://s2.glbimg.com/N9tlC72YVPFHPD6DwnB0XUdi5MU=/620x465/s.glbimg.com/jo/g1/f/original/2016/04/20/imagem_015.jpg"
    ,subtitle:"olaaa"});
  }
}
