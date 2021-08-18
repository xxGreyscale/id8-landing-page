import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http'
import { NewsService } from './services/news/news.service';
import { SvgComponentsModule } from './svg-components/svg-components.module';
import { HttpErrorHandler } from './services/error-handler/http-error-handler.service';
import { MessageService } from './services/message/message.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // HttpErrorHandler,
    ComponentsModule,    
    SvgComponentsModule,
    AppRoutingModule,
  ],
  providers: [
    MessageService,
    HttpErrorHandler,
    NewsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
