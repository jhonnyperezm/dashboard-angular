import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Compras',
      icono: 'mdi mdi-shopping menu-icon',
      href: '#Compras',
      hrefp: 'Compras',
      submenu: [
        { titulo: 'Compras', url: '/Compras/Compras' },
      ]
    },
    {
      titulo: 'Gestor',
      icono: 'mdi mdi-shopping menu-icon',
      href: '#gestor',
      hrefp: 'gestor',
      submenu: [
        { titulo: 'Inicio', url: '/gestor/inicio' },
        { titulo: 'Puntos', url: '/gestor/puntos' },
      ]
    },
    {
      titulo: 'Configuraciones',
      icono: 'mdi mdi-home menu-icon',
      href: '#cliente',
      hrefp: 'cliente',
      submenu: [
        { titulo: 'Cliente', url: '/Cliente' }
      ]
    },
    {
      titulo: 'Principal',
      icono: 'mdi mdi-home menu-icon',
      href: '#prueba',
      hrefp: 'prueba',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'prueba1', url: '/progress' },
        { titulo: 'prueba2', url: '/graficas1' },
        { titulo: 'prueba3', url: '/promesas' },
        { titulo: 'prueba4', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open menu-icon',
      href: '#prueba1',
      hrefp: 'prueba1',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Gym', url: '/hospitales' },
        { titulo: 'Rutinas', url: '/medicos' }
      ]
    },
    {
      titulo: 'Graficas',
      icono: 'mdi mdi-folder-lock-open menu-icon',
      href: '#prueba2',
      hrefp: 'prueba2',
      submenu: [
        { titulo: 'Grafica', url: '/grafica' },
      ]
    }
  ];

  constructor() { }
}
