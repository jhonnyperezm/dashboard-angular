import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function menuHorizontal();
declare function colorMisc();

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html'
})
export class ComprasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    menuHorizontal();
    colorMisc();
  }

}
