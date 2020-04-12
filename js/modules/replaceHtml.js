import dataHandler from "./dataHandler";

export default class ReplaceHTML {
  constructor(pageHtml, backendData, url) {
    this.newHtml = document.createElement('div');
    this.newHtml.innerHTML = pageHtml;
    this.backendData = [...backendData];
    this.url = url;
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

  replaceHtmlWithBackendData() {
    const main = this.newHtml.querySelector('[data-main="main_page"]');
    this.backendData.forEach(element => {
      main.appendChild(dataHandler(this.url, element));
    })
  }

  replaceHtmlMain() {
    const oldMain = document.querySelector('[data-main="main"]');
    const newMain = this.newHtml.querySelector('[data-main="body"]');
    oldMain.innerHTML = newMain.innerHTML;
  }

  init() {
    if (this.newHtml.innerHTML != '') {
      // this.replaceHtmlTitle();
      // this.replaceHtmlMeta();
      this.replaceHtmlWithBackendData();
      this.replaceHtmlMain();
    }
    return this;
  }
}