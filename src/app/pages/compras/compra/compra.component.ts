import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function menuHorizontal();
declare function colorMisc();

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styles: []
})
export class CompraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    menuHorizontal();
    colorMisc();
  }

}
