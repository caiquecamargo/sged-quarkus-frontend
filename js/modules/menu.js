export default class Menu {
  constructor(selector) {
    this.menu = document.querySelector(selector);
  }

  show() {
    this.menu.classList.remove('display-none');
  }

  hide() {
    this.menu.classList.add('display-none');
  }

  toggle(newClass = 'active') {
    this.menu.classList.toggle(newClass);
  }

  addClass(newClass = 'active') {
    this.menu.classList.add(newClass)
  }

  removeClass(newClass = 'active') {
    this.menu.classList.remove(newClass)
  }
}