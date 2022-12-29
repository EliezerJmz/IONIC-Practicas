import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-time',
  templateUrl: './data-time.page.html',
  styleUrls: ['./data-time.page.scss'],
})
export class DataTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  recuperaFecha: Date;

  //"customPickerOptions" va a ser un objeto
  customPickerOptions = {
    //definimos los botones en un arreglo
    buttons: [
      {
        text: 'Hola'
      },
      {
        text: 'Mundo'
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event){
  //con event obtenemos los cambios que se hicieron en este caso los cambios en fechas
    console.log(event);

    //recuperar la fecha por medio del event.value
    this.recuperaFecha = new Date(event.detail.value);

  }

}
