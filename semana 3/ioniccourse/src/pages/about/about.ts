import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LeaderProvider} from '../../providers/leader/leader';
import { inject } from '@angular/core/src/render3';
import {Leader} from '../../shared/leader';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage implements OnInit {

  leader: Leader;
  leaderErrMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private leaderservice: LeaderProvider, @Inject('BaseURL') private BaseURL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  ngOnInit(){
    this.leaderservice.getFeaturedLeader()
    .subscribe(leader1 => this.leader = leader1,
    errmess => this.leaderErrMess = <any>errmess);
  }

}
