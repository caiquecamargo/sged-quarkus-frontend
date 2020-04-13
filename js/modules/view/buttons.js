export default class Buttons {
  constructor(selector) {
    this.buttons = document.querySelectorAll(selector);
  }

  addEventListenerToButtons(callback) {
    this.buttons.forEach((button) => {
      callback(button);
    })
  }

  toggle(newClass = 'active') {
    this.buttons.forEach((button) => {
      button.classList.toggle(newClass);
    })
  }

  addClass(newClass = 'active') {
    this.buttons.forEach((button) => {
      button.classList.add(newClass);
    })
  }

  removeClass(newClass = 'active') {
    this.buttons.forEach((button) => {
      button.classList.remove(newClass);
    })
  }
}