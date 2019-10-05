import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function menuHorizontal();
declare function colorMisc();

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html'
})
export class ConfiguracionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    menuHorizontal();
    colorMisc();
  }

}
