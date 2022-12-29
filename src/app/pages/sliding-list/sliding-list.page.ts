import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sliding-list',
  templateUrl: './sliding-list.page.html',
  styleUrls: ['./sliding-list.page.scss'],
})
export class SlidingListPage implements OnInit {

  //delacramos un elemento ViewChild, y le decimos que busque el objetolista
  @ViewChild('lista') lista: IonList;


  //variable para mostrar la data en el html
  usuarios: Observable<any>;

  //inyectamos nuestro servicio data.service
  constructor(private dataService: DataService) { }

  ngOnInit() {
    //obtener la data con subscribe y mostrarla en consola
    this.dataService.getUsers().subscribe(console.log);

    //para mostrar los datos en el html
    this.usuarios = this.dataService.getUsers();
  }

  //metodos que utilizamos en el sliding
  favorito(user){
    console.log('Fovorito', user);
    //cerramos el sliding lista al seleccionar una opcion
    this.lista.closeSlidingItems();
  }

  compartir(user){
    console.log('Compartir', user);
    //cerramos el sliding lista al seleccionar una opcion
    this.lista.closeSlidingItems();
  }

  borrar(user){
    console.log('borrar', user);
    //cerramos el sliding lista al seleccionar una opcion
    this.lista.closeSlidingItems();
  }

}
