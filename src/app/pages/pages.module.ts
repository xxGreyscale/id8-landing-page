import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { SvgComponentsModule } from '../svg-components/svg-components.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpErrorHandler } from '../services/error-handler/http-error-handler.service';
import { MessageService } from '../services/message/message.service';
import { NewsService } from '../services/news/news.service';
import { UserService } from '../services/user/user.service';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent,
    LandingPageComponent,
    AboutPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,    
    HttpClientModule,
    SvgComponentsModule,
    PagesRoutingModule
  ],
  providers: [
    MessageService,
    HttpErrorHandler,
    UserService,
    NewsService,

  ],
})
export class PagesModule { }
