import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Id8IconSVGComponent } from './id8-icon-svg/id8-icon.component';
import { SearchIconComponent } from './search-ico-svg/search-ico.component';



@NgModule({
  declarations: [
    Id8IconSVGComponent,
    SearchIconComponent,
    ],
  imports: [
    CommonModule
  ],
  exports: [
    Id8IconSVGComponent,
    SearchIconComponent,
  ]
})
export class SvgComponentsModule { }
