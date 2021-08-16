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

  carousel: any;
  carouselContent: any; 


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
    this.carousel = [
      {
        content: 
        `Take you innovative business idea to the next level and join tailored programs
         that include access to exclusive development support dedicated workshops and mentors`,
        image: 'assets/img/kid-light.png'

      },
      {
        content: 
        `A space connecting people & ideas to business resources;
         promoting collaboration and sharing of collective knowledge to support your journey.`,
        image: 'assets/img/kid-light.png'

      }
    ]
  }

}
