import dataHandler from "../control/dataHandler";

export default class ReplaceHTML {
  constructor(pageHtml, backendData, url) {
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

  replaceHtmlWithBackendData(backendData, url) {
    const main = this.newHtml.querySelector('[data-main="main_page"]');
    backendData.forEach(element => {
      main.appendChild(dataHandler(url, element));
    })
  }

  replaceHtmlMain() {
    const oldMain = document.querySelector('[data-main="main"]');
    const newMain = this.newHtml.querySelector('[data-main="body"]');
    oldMain.innerHTML = newMain.innerHTML;
  }

  init() {
    if (this.newHtml.innerHTML != '') {
      this.replaceHtmlMain();
    }
    return this;
  }
}