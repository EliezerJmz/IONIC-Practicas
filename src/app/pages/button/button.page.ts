import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor() { }

  favorito: boolean = true;

  ngOnInit() {
  }

  onClick(){
    //si esta en true al hacer click se pone en false y si esta en false al hacer clck se pone en true
    this.favorito = !this.favorito;
  }

}
