import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor() { }

  linkList = [
    {"title": "HOME",       "routLink":"/home"},
    {"title": "ABOUT",      "routLink":"/about"},
    {"title": "CONTACT US", "routLink":"/contactus"},
  ];

  ngOnInit() {
  }

}
