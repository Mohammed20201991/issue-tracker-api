import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  // step1
  // public isMenuCollapsed = false;
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
