import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { UserService } from 'src/app/services/user/user.service';

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

  constructor(private location: Location, private userService: UserService) { 
    
  }
  
  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }
  
  ngOnInit(): void {
    this.pageUrl = this.location.path();
    this.pageUrl = this.pageUrl.split('/')[1]
    console.log(this.pageUrl);

    this.userService.authenitcate().subscribe(authentication => {
      console.log(authentication);
      
    })
    
  }

}
