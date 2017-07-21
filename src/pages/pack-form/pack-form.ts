import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { PackService } from "../../services/pack.service";

@Component({
  selector: 'page-pack-form',
  templateUrl: 'pack-form.html',
})
export class PackForm {
  public packName: any = {name: "",
    url: "http://wallpapersdsc.net/wp-content/uploads/2016/09/New-Orleans-Wallpapers.jpg"};

  constructor(public events: Events,
              public navCtrl: NavController,
              public navParams: NavParams,
              public pkSvs: PackService) {
  }

  public ionViewDidLoad() {
    console.log('ionViewDidLoad PackFormPagePage');
  }
  public submitPack() {
    console.log(this.packName);
    this.pkSvs.addPacks(this.packName);
    this.events.publish("pack:submited");
    this.navCtrl.pop();
  }
  public cancelPack() {
    this.navCtrl.pop();
  }

}