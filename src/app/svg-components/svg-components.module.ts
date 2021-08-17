import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Id8IconComponent } from './id8-icon-svg/id8-icon.component';
import { Id8WordComponent } from './id8-word-svg/id8.sowrd.component';



@NgModule({
  declarations: [
      Id8IconComponent,
      Id8WordComponent,
    ],
  imports: [
    CommonModule
  ]
})
export class SvgComponentsModule { }
