export class Carousel {
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
    });

    this.CarouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
      if(i + 1 == 3){
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
