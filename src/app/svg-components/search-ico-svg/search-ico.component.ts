import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-ico-svg',
  templateUrl: './search-ico.component.svg',
  styleUrls: ['./search-ico.component.scss']
})
export class SearchIconComponent {
  @Input() yPosition: any;
  pageUrl: string = '';

  ngOnChange() {
  }

  constructor(private location: Location) {
    this.pageUrl = this.location.path();
    this.pageUrl = this.pageUrl.split('/')[1]
  }

  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}

