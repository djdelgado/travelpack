import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chat } from "../chat/chat";

@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html'
})
export class Photos {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPagePage');
  }
  backClick(){
    this.navCtrl.push(Chat);
  }
}
