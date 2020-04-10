export default function Dom(selector) {
    this.selector = selector;
    this.element = () => {
        return document.querySelector(this.selector);
    }
    this.listElements = (selector = this.selector) => {
        return document.querySelectorAll(selector);
    }
    this.active = () => {
        this.element().classList.add('active');
    }
    this.activeAll = () => {
        this.listElements().forEach((item) => {
            item.classList.add('active');
        })
    }
    this.disable = () => {
        this.element().classList.remove('active');
    }
    this.disableAll = () => {
        this.listElements().forEach((item) => {
            item.classList.remove('active');
        })
    }
}