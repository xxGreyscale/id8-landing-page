import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `<router-outlet></router-outlet>`
})
export class Pages implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
