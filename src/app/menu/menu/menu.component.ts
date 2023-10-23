import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menus: Menu[] = [
    new Menu("Home", "/hub"),
    new Menu ("About", "/about"),
    new Menu ("Login", "/login"),
    new Menu ("Register", "/register")
    
  ];

}
