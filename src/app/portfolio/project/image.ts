export class Image {
  path: string = '';
  alt: string = '';
  link: string = '';

  constructor(path: string, alt: string, link: string) {
    this.link = link;
    this.alt = alt;
    this.path = path;
  }

  static GetImage(): Array<Image> {
    var images = new Array<Image>();
    images = [
      new Image('assets/images/imagem-1.jpg', 'carro 1', '#'),
      new Image('assets/images/imagem-2.jpg', 'carro 2', '#'),
      new Image('assets/images/imagem-3.jpg', 'carro 3', '#'),
      new Image('assets/images/imagem-4.jpg', 'carro 4', '#'),
      new Image('assets/images/imagem-5.jpg', 'carro 5', '#'),
      new Image('assets/images/imagem-6.jpg', 'carro 6', '#'),
      new Image('assets/images/imagem-7.jpg', 'carro 7', '#'),
    ];

    return images;
  }
}
