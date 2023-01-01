import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  isMenuOpen = false;

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  toogleMenu(): void{
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    var home = document.getElementById("home");
    var aboutme = document.getElementById("aboutme");
    var experience = document.getElementById("experience");
    var themeRed = document.getElementById("themeRed");
    var windowScrollPosition = window.scrollY +0;
    if(windowScrollPosition > home.offsetTop && windowScrollPosition < aboutme.offsetTop){
      $('#logo').addClass('active');
    }else if(windowScrollPosition > aboutme.offsetTop && windowScrollPosition < experience.offsetTop){
      $('#logo').removeClass('active');
    }else{
      $('#logo').removeClass('active');
    }
  }
}
