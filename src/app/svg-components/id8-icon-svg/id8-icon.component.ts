import { Component } from '@angular/core';

@Component({
  selector: 'app-id8-icon-svg',
  templateUrl: './id8-icon.component.svg',
  styleUrls: ['./id8-icon.component.scss']
})
export class Id8IconComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}

