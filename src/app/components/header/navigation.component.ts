import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  yPosition: any = 0;
  pageUrl: string = '';

  @HostListener('window:scroll', [`$event`]) onWindowScroll(): void {
    // console.log(window.scrollY);
    this.yPosition = window.scrollY;
 }


  isCollapsed: any = false;

  onHambugerClick = () => {
    this.isCollapsed = !this.isCollapsed
  }

  constructor(private location: Location, private myElement: ElementRef) { 
    
  }
  
  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  ngOnInit(): void {
    this.pageUrl = this.location.path();
    this.pageUrl = this.pageUrl.split('/')[1]
    console.log(this.pageUrl);

    // this.userService.authentication()
    
  }

  goToContactsForm() {
   document.getElementById("contacts-form")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
   })

   let toggler = document.getElementById("toggler")
   let navbar = document.getElementById("navbarNav")

   if(this.isCollapsed) {
     toggler?.setAttribute('aria-expanded', 'false');
     toggler?.classList.add('collapsed')
     navbar?.classList.remove("show")
     this.isCollapsed = !this.isCollapsed;
   }


   document.getElementById("contact-email")?.focus()
  }

}
