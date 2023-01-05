import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './portfolio/home/home.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ClickOutsideDirective } from './directives/clickOutsideDirective';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmailApiService } from './services/email-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
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
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmailApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
