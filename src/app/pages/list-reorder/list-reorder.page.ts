import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Wonder Woman'];

  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    console.log(event)

      //Para reordenar los items en la lista cuando los movemos de posicion 
      //eliminar 1 un item el que se va a mover
      const itemMover = this.personajes.splice(event.detail.from, 1)[0];
      //hacia donde lo vamos a mover no eliminamos ninguno en 0 y agregamos el itemMover
      this.personajes.splice(event.detail.to, 0, itemMover);
  
      //No permite que los items se queden trabados cuando los movemos de posicion
      event.detail.complete();
  }

  onClick(){
    //Mostramos en consola los personajes
    console.log(this.personajes);
  }

}
