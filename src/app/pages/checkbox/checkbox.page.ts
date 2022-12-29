import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor() { }

  data = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'warning',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    },
  ]

  ngOnInit() {
  }

  valoresActuales(item:any){
    console.log(item);
  }

  verData(){
    //mostramos los valores de la lista data
    console.log(this.data);
  }


}
