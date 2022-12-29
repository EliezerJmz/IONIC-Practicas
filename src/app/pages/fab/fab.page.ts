import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  //un array de 100 elementos
  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
