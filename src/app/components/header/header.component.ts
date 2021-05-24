import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nav = [
    { path: '/', title: 'Home' },
    { path: '/repos', title: 'Repos' },
    { path: '/forms', title: 'Forms' },
    { path: '/static', title: 'Static' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
