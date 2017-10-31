import {Component, OnInit} from '@angular/core';
import {forEach} from "@angular-devkit/schematics";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  selected: Object;

  constructor() {
  }

  menu: Object[] = [

    {
      item: "home",
      desc: "home desc"
    },
    {
      item: "about",
      desc: "about desc"
    },
    {
      item: "contact",
      desc: "contact desc"
    }
  ]

  ngOnInit() {
  }

  select(name: Object) {
    this.selected = name;
    console.log(this.selected);
  }



}
