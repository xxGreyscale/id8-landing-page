import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/navigation.component';
import { SvgComponentsModule } from '../svg-components/svg-components.module';
import { SocialsComponent } from './socials/socials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SocialsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
