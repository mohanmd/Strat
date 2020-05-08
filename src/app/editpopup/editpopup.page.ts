import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-editpopup',
  templateUrl: './editpopup.page.html',
  styleUrls: ['./editpopup.page.scss'],
})
export class EditpopupPage implements OnInit {

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController

  ) 
  {
     console.log("cdvgc");
  }

  ngOnInit() {
  }
  
  public closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
