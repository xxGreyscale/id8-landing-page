import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Id8IconSVGComponent } from './id8-icon-svg/id8-icon.component';
import { Id8WordSVGComponent } from './id8-word-svg/id8.word.component';



@NgModule({
  declarations: [
    Id8IconSVGComponent,
    Id8WordSVGComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [
    Id8IconSVGComponent,
    Id8WordSVGComponent,
  ]
})
export class SvgComponentsModule { }
