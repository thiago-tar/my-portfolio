import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/home/home.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ClickOutsideDirective } from './directives/clickOutsideDirective';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ExperienceComponent,
    AboutComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
