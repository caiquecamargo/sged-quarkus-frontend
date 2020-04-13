import Button from "./buttons";
import Element from "./elements";

export default class ModalMenu {
  constructor(selector) {
    if (selector === undefined) this.selector = '[data-button="sign-up"]';
    else this.selector = selector;

    this.button = new Button(this.selector);
    this.menu = new Element('[data-modal="sign-up"]');
    this.container = document.querySelector('[data-modal="container"');

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(event) {
    event.preventDefault();
    this.menu.toggle();
  }

  close(event) {
    event.preventDefault();
    if (event.target === this.menu.element) this.menu.toggle();
  }

  addEvents() {
    this.button.addEventListenerToButtons((button) => {
      button.addEventListener('click', this.open);
    })
    this.menu.addClick(this.close);
  }

  init() {
    if (this.menu.element != null) this.addEvents();
  }
}