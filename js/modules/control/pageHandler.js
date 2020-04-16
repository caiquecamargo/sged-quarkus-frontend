import ReplaceHtml from "../view/replaceHtml";
import Logger from "../log/logger"
import Item from "../model/item";
import ItemController from "./itemController";

export default class PageHandler {
  constructor(pageHtml, url, backendData) {
    this.replaceHtml = new ReplaceHtml(pageHtml);
    this.page = this.getPage(url);
    this.backendData = backendData;

    this.pages = {
      "minhaconta": () => {
        this.replaceHtml.init();
      },
      "adicionarItem": () => {
        this.replaceHtml.init();

        const dataForm = document.querySelector("[data-form='adicionar_item']");
        dataForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const myFile = document.querySelector('[data-input="file"]');
          const restricoes = document.querySelector('[data-input="restricoes"]');

          if (myFile.files.length != 0) {
            const item = new Item();
            item.setNome(myFile.files[0].name);
            item.setRestricoes(restricoes.value);
            item.setTipo(myFile.files[0].type);

            const itemController = new ItemController(item);
            itemController.fetchItem(new FormData(dataForm));
          } else {
            Logger.log("Arquivo não selecionado.");
          }
        })
      },
      "visualizarItem": () => {
        this.replaceHtml.replaceHtmlWithBackendData(this.backendData, this.page);
        this.replaceHtml.init();
      },
      "adicionarGrupo": () => {
        this.replaceHtml.init();
      },
      "visualizarGrupos": () => {
        this.replaceHtml.replaceHtmlWithBackendData(this.backendData, this.page);
        this.replaceHtml.init();
      },
      "validarUsuario": () => {
        this.replaceHtml.replaceHtmlWithBackendData(this.backendData, this.page);
        this.replaceHtml.init();
      },
      "visualizarUsuarios": () => {
        this.replaceHtml.replaceHtmlWithBackendData(this.backendData, this.page);
        this.replaceHtml.init();
      }
    }
  }

  getPage(url) {
    const page = url.split("/")[3];
    return page.split(".")[0];
  }

  init() {
    this.pages[this.page]();
  }
}