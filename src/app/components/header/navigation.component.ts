import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  yPosition: any = 0;

  @HostListener('window:scroll', [`$event`]) onWindowScroll(): void {
    // console.log(window.scrollY);
    this.yPosition = window.scrollY;
 }


  isCollapsed: any = false;

  onHambugerClick = () => {
    this.isCollapsed = !this.isCollapsed
  }

  constructor() { }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

  ngOnInit(): void {
    
  }

}
