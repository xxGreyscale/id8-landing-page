import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/navigation.component';
import { SvgComponentsModule } from '../svg-components/svg-components.module';
import { SocialsComponent } from './socials/socials.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SocialsComponent
  ],
  imports: [
    SvgComponentsModule,
    CommonModule,
  ],
  exports: [
    SocialsComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
