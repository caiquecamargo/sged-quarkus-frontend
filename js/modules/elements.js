export default class Element {
  constructor(element) {
    this.element = element;
  }

  dataset(data) {
    return this.element.dataset[data];
  }

  show() {
    this.element.classList.remove('display-none');
  }

  hide() {
    this.element.classList.add('display-none');
  }

  toggle(newClass = 'active') {
    this.element.classList.toggle(newClass);
  }

  addClass(newClass = 'active') {
    this.element.classList.add(newClass)
  }

  removeClass(newClass = 'active') {
    this.element.classList.remove(newClass)
  }
}