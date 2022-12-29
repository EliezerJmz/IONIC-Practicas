import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  
  data: any[] = Array(20);

  //creamos nuesto myInfiniteScroll de tipo IonInfiniteScroll
  @ViewChild(IonInfiniteScroll) myInfiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }


//Esta funcin carga los datos pero es infinita
 /**
  loadData(event){
    console.log(event);

    //usamos un timeout para darle un tiempo al efecto de carga
    setTimeout(() =>{

      //creamos un nuevo arreglo para cargar mas datos al arreglo data
      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      event.target.complete();
    }, 1500);
 */
  

//LIMITAR LOS DATOS QUE CARGARA EL INFINITE SCROLL USAMOS EL @ViewChild para manejar el componente de InfiniteScroll Directamente
loadData(){

  //usamos un timeout para darle un tiempo al efecto de carga
  setTimeout(() =>{

    //validamos que si el tamaño de la data es > a 50 entonces que se desactive el infiniteScroll
    if ( this.data.length > 50 ){
      this.myInfiniteScroll.complete();
      this.myInfiniteScroll.disabled = true;
      return;
    }

    //creamos un nuevo arreglo para cargar mas datos al arreglo data
    const nuevoArray = Array(20);
    this.data.push(...nuevoArray);

  
    this.myInfiniteScroll.complete();
  }, 1500);


  }

}
