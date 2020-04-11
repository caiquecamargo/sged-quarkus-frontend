import Gallery from "./gallery.js";

export default class Highlight {
  constructor(item) {
    this.main = document.querySelector('[data-highlight="main"]');
    this.container = this.main.querySelector('[data-highlight="container"]');
    this.button = this.main.querySelector('[data-highlight="button"]');
    this.item = item;
    this.imgs = [];

    this.handleButton = this.handleButton.bind(this);
  }

  createContainer() {
    const div = document.createElement('div');
    const host = "http://" + window.location.host + "/";

    const highlightContent = document.createRange().createContextualFragment(`
      <div class="portfolio-highlight__container__button click-close" data-highlight="button"><div class="click-close"></div><div class="click-close"></div></div>
      <div class="portfolio-highlight__gallery" data-gallery="gallery">
        <div class="portfolio-highlight__gallery__list">
          <img data-gallery="list" src="images/produtos/canecas/${this.item['Referência'].trim()}/${this.item['Referência'].trim()}-1x.webp" alt="${this.item.Item}">
          <img data-gallery="list" src="images/produtos/canecas/${this.item['Referência'].trim()}/${this.item['Referência'].trim()}-1x-1.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/${this.item['Referência'].trim()}/${this.item['Referência'].trim()}-1x-2.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/${this.item['Referência'].trim()}/${this.item['Referência'].trim()}-1x-3.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/${this.item['Referência'].trim()}/${this.item['Referência'].trim()}-1x-4.webp" alt="">
        </div>
        <div class="portfolio-highlight__gallery__main">
          <div data-gallery="main" style="background: url(${host}images/produtos/canecas/${this.item['Referência'].trim()}/${this.item['Referência'].trim()}-1x.webp) center center / contain no-repeat;"></div>
        </div>
      </div>
      <div class="portfolio-highlight__content">
        <header class="portfolio-highlight__content__header">
          <h2 class="portfolio-highlight__content__header__title">${this.item.Item}</h2>
        </header>
        <p class="portfolio-highlight__content__description">${this.item["Descrição"]}</p>
        <p class="portfolio-highlight__content__price">${this.item['Valor de Venda']}</p>
      </div>`);

    div.appendChild(highlightContent);

    this.container.innerHTML = div.innerHTML;
  }

  handleButton(event) {
    event.preventDefault();
    if (event.target === this.main || event.target === this.button || event.target.classList.contains('click-close')) this.main.classList.remove('active');
  }

  init() {
    this.main.classList.add('active');
    this.createContainer();
    this.main.addEventListener('click', this.handleButton);

    const gallery = new Gallery();
    gallery.init();
  }
}
