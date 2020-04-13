export default class Element {
  constructor(element) {
    if (typeof element === "string") this.element = document.querySelector(element);
    else this.element = element;
  }

  addClick(callback) {
    this.element.addEventListener('click', callback);
  }

  dataset(data) {
    return this.element.dataset[data];
  }

  show() {
    this.element.style.display = "";
  }

  hide() {
    this.element.style.display = "none";
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