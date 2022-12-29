import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  //inyectamos el AlertController
  constructor( private alertCtrl: AlertController) { }

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertCtrl.create({
      //ctrl+barra espaciadora para ver opciones
      backdropDismiss: false, // false para obligar a seleccionar una opcion
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Esta es un alerta',
      message: 'Este es un mensaje de alerta de la pagina.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Esta es una alerta',
      message: 'Este es un mensaje de alerta de la pagina pero tiene multiples botones de opcion.',
      //tenemos multiples opciones pero no sabemos cual opcion se seleccion
      //buttons: ['Cancel', 'Open Modal', 'Delete']

      //para saber cual opcion se seleccona lo podemos manejar como array de objetos de la siguiente forma:
      buttons:[
        {
          text: 'OK',
          //handler funcion que se dispara cuando hacemos click en OK
          handler: () => { 
            console.log('se hiso click en OK')
          }
        },
        
        {
          text: 'Delete',
          //handler funcion que se dispara cuando hacemos click en OK
          handler: () => { 
            console.log('se hiso click en Delete')
          }
        },

        {
          text: 'Cancelar',
          //handler funcion que se dispara cuando hacemos click en OK
          role: 'cancel',
          //le podemos poner un css myRojo esta en theme--global.scss
          cssClass: 'myRojo'
        },

      ]
    });

    await alert.present();
  }



  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2025-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
          min: '2017-03-01',
          max: '2025-01-12'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          //en la funcion handler podemos obtener la toda la data que se ingreso en el formulario
          handler: (data:any) => {
            console.log('Se preciono OK, se obtuvo la data ingresada');
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }





}
