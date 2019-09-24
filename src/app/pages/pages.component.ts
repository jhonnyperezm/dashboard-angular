import { Component, OnInit } from '@angular/core';
declare function init_plugins();
declare function menuHorizontal();
declare function colorMisc();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_plugins();
    menuHorizontal();
    colorMisc();
  }

}
