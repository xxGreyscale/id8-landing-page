import { Component, OnInit, SimpleChange } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  titles: string[] = [
    `<span class="changing-text"> Create. </span>`,
    `<span class="changing-text"> Connect. </span>`,
    `<span class="changing-text"> Collaborate. </span>`
  ]

  currentIndex = 0;
  currentTitle = this.titles[this.currentIndex];
  heading: any;


  // function
  changeTitle = () => {
    this.currentIndex = (this.currentIndex + 1)%this.titles.length
    setTimeout(this.changeTitle, 2000);
  }

  ngDoCheck() {
    if (this.currentIndex >= 0) {
      this.heading = this.titles[this.currentIndex]
    }
    
  }

  constructor() {
    this.changeTitle();
  }
  
  ngOnInit(): void {
    this.heading = new BehaviorSubject(this.titles[this.currentIndex]);
  }

}
