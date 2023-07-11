import {
  AfterViewInit,
  Component,
  ElementRef
} from '@angular/core';
import { Carousel } from './carousel';
import { Image } from './image';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {

  Imagens: Array<Image> = Image.GetImage();

  constructor(private elem: ElementRef) {}

  ngAfterViewInit(): void {
    const galleryControlsContainer = this.elem.nativeElement.querySelector(
      '.gallery-controls'
    ) as HTMLElement;
    const galleryItems = this.elem.nativeElement.querySelectorAll(
      '.gallery-item'
    ) as HTMLElement[];

    const aux = this.elem.nativeElement.querySelector('#gallery-aux') as HTMLElement;

    var carousel = new Carousel(
      galleryItems,
      galleryControlsContainer,
      aux
    );
    carousel.useControls();
    carousel.updateGallery();
  }
}
