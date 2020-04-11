import initScrollSuaveLinkInterno from "./scrollSuaveLinkInterno.js";
import Highlight from "./hightlight.js";
import loadingAnimation from "./loading_animation";
import dataPortfolioHandler from "./dataPortfolioHandler.js";
import Buttons from "./buttons";

export default class Portfolio {
  constructor(selector) {
    this.selector = (selector === undefined) ? '[data-item="main"]' : selector;
    this.main = document.querySelector(this.selector);

    this.handleHighlightButton = this.handleHighlightButton.bind(this);
  }

  handleHighlightButton(event) {
    event.preventDefault();
    const [referencia, grupo, subgrupo, especificidade] = event.target.dataset.button.split(',');
    const item = this.dataPortfolio.data[grupo][subgrupo][especificidade][referencia];
    const highlight = new Highlight(item);
    highlight.init();
  }

  async createPortfolio() {
    loadingAnimation('[data-item="main"]');
    const response = await fetch('./canecas-json.json');
    const responseInJSON = await response.json();

    this.dataPortfolio = new dataPortfolioHandler().create(responseInJSON);
    this.main.innerHTML = this.dataPortfolio.dataElements.innerHTML;
    initScrollSuaveLinkInterno();
    const buttons = new Buttons('[data-item="button"');
    buttons.addEventListenerToButtons((button) => {
      button.addEventListener('click', this.handleHighlightButton);
    })
  }
}