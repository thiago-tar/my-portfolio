import {
  AfterViewInit,
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements AfterViewInit {

  constructor(private elem: ElementRef) {}

  ngAfterViewInit(): void {
    const galleryControls: string[] = ['previous', 'next'];

    const galleryControlsContainer = this.elem.nativeElement.querySelector(
      '.gallery-controls'
    ) as HTMLElement;
    const galleryItems = this.elem.nativeElement.querySelectorAll(
      '.gallery-item'
    ) as HTMLElement[];

    const aux = this.elem.nativeElement.querySelector('#gallery-aux') as HTMLElement;

    var carousel = new Carousel(
      galleryItems,
      galleryControls,
      galleryControlsContainer,
      aux
    );
    carousel.setControls();
    carousel.useControls();
    carousel.updateGallery();
  }
}

class Carousel {
  private CarouselControls: string[];
  private CarouselArray: HTMLElement[];
  private GalleryControlContainer: Element;
  private GalleryAux: Element;

  constructor(
    items: HTMLElement[],
    controls: string[],
    galleryControl: HTMLElement,
    aux: HTMLElement,
  ) {
    this.CarouselControls = controls;
    this.CarouselArray = [...items];
    this.GalleryControlContainer = galleryControl;
    this.GalleryAux = aux;
  }

  updateGallery() {
    this.CarouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
      el.classList.remove('selected');
    });

    this.CarouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
      if(i + 1 == 3){
        el.classList.add(`selected`);
        this.GalleryAux.textContent = el.attributes.getNamedItem('alt')?.textContent ?? '';
      }
    });
  }

  setCurrentState(direction: HTMLElement) {
    if (direction.className == 'gallery-controls-previous') {
      var el = this.CarouselArray.pop() as HTMLElement;
      this.CarouselArray.unshift(el);
    } else {
      this.CarouselArray.push(this.CarouselArray.shift() as HTMLElement);
    }

    this.updateGallery();
  }

  setControls() {
    this.CarouselControls.forEach((control) => {
      this.GalleryControlContainer.appendChild(this.CreateControl(control));
      var con = document.querySelector(
        `.gallery-controls-${control}`
      ) as HTMLElement;
      con.innerText = control;
    });
  }

  useControls() {
    this.GalleryControlContainer.childNodes.forEach((control) => {
      control.addEventListener('click', (e) => {
        e.preventDefault();
        var con = control as HTMLElement;
        this.setCurrentState(con as HTMLElement);
      });
    });
  }

  private CreateControl(control: string) {
    var newControl = document.createElement('button');
    newControl.className = `gallery-controls-${control}`;
    return newControl;
  }
}
