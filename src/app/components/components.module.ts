import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/navigation.component';
import { SvgComponentsModule } from '../svg-components/svg-components.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    SvgComponentsModule,
    CommonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
