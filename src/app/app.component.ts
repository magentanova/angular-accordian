import { Component } from '@angular/core';

class MenuItem {
    constructor(public name: string, public children: MenuItem[]) {}
}

var menu: MenuItem[] = [
  new MenuItem("Menu Item 1", [
    new MenuItem("SubMenu Item 1", [
      new MenuItem("SubSubMenu Item 1", []),
      new MenuItem("SubSubMenu Item 2", [])
    ]),
    new MenuItem("SubMenu Item 2", [])
  ]),
  new MenuItem("Menu Item 2", []),
  new MenuItem("Menu Item 3", [
    new MenuItem("SubMenuItem 3", [])
  ])
];

@Component({
  selector: 'fuse-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private menu: MenuItem[] = menu;

  constructor() {}
}
