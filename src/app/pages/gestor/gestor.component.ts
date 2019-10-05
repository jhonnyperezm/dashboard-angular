import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function menuHorizontal();
declare function colorMisc();

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styles: []
})
export class GestorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    menuHorizontal();
    colorMisc();
  }

}
