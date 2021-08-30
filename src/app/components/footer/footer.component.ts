import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  pageUrl: String = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.pageUrl = this.location.path();
    this.pageUrl = this.pageUrl.split('/')[1]
  }

}
