import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //Creamos un array de tipo Componente
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'home-outline',
      name: 'Home',
      redirectTo: '/home'
    },
    {
      icon: 'list-circle-outline',
      name: 'Sliding List',
      redirectTo: '/sliding-list'
    },
    {
      icon: 'reorder-four-outline',
      name: 'List Reorder',
      redirectTo: '/list-reorder'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'tablet-landscape-outline',
      name: 'Butons',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon: 'checkbox-outline',
      name: 'Check Box',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Data Time',
      redirectTo: '/data-time'
    },
    {
      icon: 'albums-outline',
      name: 'Slides',
      redirectTo: '/slides'
    },
    {
      icon: 'albums-outline',
      name: 'Slides Practica',
      redirectTo: '/slides-practica'
    },
    {
      icon: 'albums-outline',
      name: 'Slides Efectos',
      redirectTo: '/slides-efectos'
    },
    {
      icon: 'information-circle',
      name: 'FAb',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Ion Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'swap-vertical-outline',
      name: 'Ion Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'list-outline',
      name: 'Ion Content',
      redirectTo: '/content'
    },
    {
      icon: 'apps-outline',
      name: 'Ion Grid con Ion Item',
      redirectTo: '/grid-item'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}

//creamos una interface llamada Componente
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
