import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styles: [
  ]
})
export class MenuListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuList=["Add Employee","List All Employees"];
}
