import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  //inyectamos el ActionSheetController
  constructor( private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick(){
    //llamamos al presentActionSheet()
    this.presentActionSheet();

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albunes',
      cssClass: 'my-custom-class',
      backdropDismiss: false, //para que no se cierre el modal hasta que seleccionemos una opcion
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash-outline', //outline muestra los iconos a linea
        //podemos ponerle una clase la clase la creamos en theme-global.scss
        cssClass: 'myRojo',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle-outline',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }



}
