import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';
  isMenuOpen = false;
  menuScroll: number = 60;
  ngOnInit(): void {}

  scrollTo(elementId: any): void {
    var element = document.getElementById(elementId) as HTMLElement;
    var top = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - this.menuScroll, behavior: 'smooth' });
    this.isMenuOpen = false;
  }

  scrollIntoView(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    this.closeMenu();
  }

  toogleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    var home = document.getElementById('home')!;
    var aboutme = document.getElementById('aboutme')!;
    var contact = document.getElementById('contact')!;

    var windowScrollPosition = window.scrollY + 0;

    var homeOffSetTop = home.offsetTop - this.menuScroll;
    var aboutmeOffSetTop = aboutme.offsetTop - this.menuScroll;
    var contactOffSetTop = contact.offsetTop - this.menuScroll;

    if (windowScrollPosition < aboutmeOffSetTop) {
      this.activeClass('homeBtn');
    } else if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight
    ) {
      this.activeClass('contactBtn');
    } else if (
      windowScrollPosition >= aboutmeOffSetTop &&
      windowScrollPosition < contactOffSetTop
    ) {
      this.activeClass('aboutBtn');
    } else {
      this.activeClass('contactBtn');
    }
  }

  activeClass(divId: string) {
    var $homeBtn = $('#homeBtn');
    var $aboutBtn = $('#aboutBtn');
    var $contactBtn = $('#contactBtn');

    $homeBtn.removeClass('active');
    $aboutBtn.removeClass('active');
    $contactBtn.removeClass('active');

    $('#' + divId).addClass('active');
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
