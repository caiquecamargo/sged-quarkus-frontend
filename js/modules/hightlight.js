import Gallery from "./gallery.js";

export default function initHighlight(data, ref) {
  const main = document.querySelector('[data-highlight="main"]');
  const container = main.querySelector('[data-highlight="container"]');

  function createContainer() {
    const [referencia, grupo, subgrupo, especificidade] = ref;
    const item = data[grupo][subgrupo][especificidade][referencia];

    const div = document.createElement('div');

    const sum = document.createRange().createContextualFragment(`
      <div class="portfolio-highlight__container__button" data-highlight="button"><div class="click-close"></div><div class="click-close"></div></div>
      <div class="portfolio-highlight__gallery" data-gallery="gallery">
        <div class="portfolio-highlight__gallery__list">
          <img data-gallery="list" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp" alt="${item.Item}">
          <img data-gallery="list" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-1.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-2.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-3.webp" alt="">
          <img data-gallery="list" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x-4.webp" alt="">
        </div>
        <div class="portfolio-highlight__gallery__main">
          <img data-gallery="main" src="images/produtos/canecas/${item['Referência'].trim()}/${item['Referência'].trim()}-1x.webp" alt="">
        </div>
      </div>
      <div class="portfolio-highlight__content">
        <header class="portfolio-highlight__content__header">
          <h2 class="portfolio-highlight__content__header__title">${item.Item}</h2>
        </header>
        <p class="portfolio-highlight__content__description">Caneca Comum Branca</p>
        <p class="portfolio-highlight__content__price">${item['Valor de Venda']}</p>
      </div>`);

    div.appendChild(sum);

    container.innerHTML = div.innerHTML;
  }

  createContainer();
  const button = main.querySelector('[data-highlight="button"]');

  function handleButton(event) {
    event.preventDefault();
    if (event.target === main || event.target === button || event.target.classList.contains('click-close')) main.classList.remove('active');
  }

  main.addEventListener('click', handleButton);

  const gallery = new Gallery();
  gallery.init();
}
