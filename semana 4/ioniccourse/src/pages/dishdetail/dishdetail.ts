import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, ModalController} from 'ionic-angular';
import { Dish } from '../../shared/dish';
import { Comment } from '../../shared/comment';
import { FavoriteProvider } from '../../providers/favorite/favorite';
import {CommentPage} from '../comment/comment';
import {SocialSharing} from '@ionic-native/social-sharing';

/**
 * Generated class for the DishdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {
  dish: Dish;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite : boolean;
  newcomment: Comment;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toastCtrl: ToastController,
    private favoriteservice: FavoriteProvider,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    @Inject('BaseURL') private BaseURL) {
    this.dish = navParams.get('dish');
    this.favorite = favoriteservice.isFavorite(this.dish.id);
    this.numcomments = this.dish.comments.length;
    let total = 0;
    this.dish.comments.forEach(comment => total += comment.rating );
    this.avgstars = (total/this.numcomments).toFixed(2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  addToFavorites() {
    console.log('Adding to Favorites', this.dish.id);
    this.favorite = this.favoriteservice.addFavorite(this.dish.id);
    this.toastCtrl.create({
      message: 'Dish ' + this.dish.id + ' added as a favorite successfully',
      position: 'middle',
      duration: 3000
    }).present();
  }


  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Select Actions',
      buttons: [
        {
          text: 'Add to Favorites',
          handler: () => {
            this.addToFavorites();
          }
        },{
          text: 'Add Comment',
          handler: () => {
            console.log('Add a comment clicked');
            this.presentProfileModal();
          }
        },{
          text: 'Share via Facebook',
          handler: () => {
            this.socialSharing.shareViaFacebook(
              this.dish.name + ' -- ' + this.dish.description,
              this.BaseURL + '/assets/' + this.dish.image, '')
                .then(() => console.log("Posted succesfully to Facebook"))
                .catch(() => console.log("Failed to post to Facebook"));
          }
        },{
          text: 'Share via Twitter',
          handler: () => {
            this.socialSharing.shareViaTwitter(
              this.dish.name + ' -- ' + this.dish.description,
              this.BaseURL + '/assets/' + this.dish.image, '')
                .then(() => console.log("Posted succesfully to Twitter"))
                .catch(() => console.log("Failed to post to Twitter"));
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(CommentPage);

    profileModal.onDidDismiss(data=>{ //This is a listener which wil get the data passed from modal when the modal's view controller is dismissed
      if(data){    
        console.log("Data =>", data) //This will log the form entered by user in add modal.
        this.newcomment = data;
        var d = new Date();
        var n = d.toISOString();
        this.newcomment.date = n;
        console.log(this.newcomment);

        this.dish.comments.push(this.newcomment);
      }

    })


    profileModal.present();
  }

}