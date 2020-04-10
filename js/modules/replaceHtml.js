export default class ReplaceHTML {
  constructor(pageHtml) {
    this.newHtml = document.createElement('div');
    this.newHtml.innerHTML = pageHtml;
  }

  replaceHtmlTitle() {
    document.title = this.newHtml.querySelector('title').innerText;
  }

  replaceHtmlMeta() {
    const oldMeta = document.querySelectorAll('[data-meta]');
    const newMeta = this.newHtml.querySelectorAll('[data-meta');
    oldMeta.forEach((meta, pos) => {
      meta.replaceWith(newMeta[pos]);
    })
  }

  replaceHtmlMain() {
    const oldMain = document.querySelector('[data-main="main"]');
    const newMain = this.newHtml.querySelector('[data-main="main"]');
    oldMain.innerHTML = newMain.innerHTML;
    oldMain.classList = newMain.classList;
  }

  init() {
    if (this.newHtml.innerHTML != '') {
      this.replaceHtmlTitle();
      this.replaceHtmlMeta();
      this.replaceHtmlMain();
    }
    return this;
  }
}