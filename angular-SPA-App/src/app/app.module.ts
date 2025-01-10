import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './main/header-section/header-section.component';
import { ContentSectionComponent } from './main/content-section/content-section.component';
import { FooterSectionComponent } from './main/footer-section/footer-section.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ContentSectionComponent,
    FooterSectionComponent,
    MainComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
