import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7-basic-layout';

  constructor() { };

  linkList = [
    {"title": "HOME",       "routLink":"/home"},
    {"title": "ABOUT",      "routLink":"/about"},
    {"title": "CONTACT US", "routLink":"/contactus"},
  ];
}
