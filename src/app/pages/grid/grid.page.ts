import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  //un array de 12 elementos
tarjeta = Array(6);


  constructor() { }

  ngOnInit() {
  }

}
