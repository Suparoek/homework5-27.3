import { Component, OnInit,ViewChild } from '@angular/core';
import { NavItem } from '../../models/navitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidenav',{static:true})
  isExpanded =true;
  showSubmenu: boolean=false;
  isShowing = false;
  isCollapsed = false;

  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  constructor() { }
  menus: NavItem [] = [
    {
      displayName: 'Expedientes',
      iconName: 'description',          
      children: [
        {
          displayName: 'Mis Expedientes',
          iconName: 'adjust',
          route: '/misexpedientes'
        },
        { 
          displayName: 'Todos',
          iconName: 'adjust',
          route: '/todos'
        }
      ]
    },
    {
      displayName: 'Perfiles',
      iconName: 'group',
      children: [
          {
            displayName: 'Búsqueda Perfil',
            iconName: 'search',
            route: '/busquedaperfiles'
          }
        ]
      }
  ];
  ngOnInit(): void {
  }

}
