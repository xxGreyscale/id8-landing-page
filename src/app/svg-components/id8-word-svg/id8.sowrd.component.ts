import { Component } from '@angular/core';

@Component({
  selector: 'app-id8-word-svg',
  templateUrl: './id8-word.component.svg',
  styleUrls: ['./id8-word.component.css']
})
export class Id8WordComponent {
  fillColor = 'rgb(255, 0, 0)';

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
}

