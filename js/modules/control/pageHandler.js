import ReplaceHtml from "../view/replaceHtml";
import Buttons from "../view/buttons";

export default class PageHandler {
  constructor(pageHtml, url, backendData) {
    this.replaceHtml = new ReplaceHtml(pageHtml);
    this.url = url;
    this.page = this.getPage();
    this.backendData = backendData;

    this.pages = {
      "minhaconta": () => {
        this.replaceHtml.init();
      },
      "adicionarItem": () => {
        this.replaceHtml.init();
        const button = new Buttons('[data-button="fileupload]"');
        const dataForm = document.querySelector("[data-form='adicionar_item']");
        dataForm.addEventListener('submit', (event) => {
          event.preventDefault();
          const myFile = document.querySelector('[data-input="file"]');
          const restricoes = document.querySelector('[data-input="restricoes"]');
          console.log(restricoes)
          const file = {
            "id": 0,
            "nome": myFile.files[0].name,
            "restricoes": restricoes.value,
            "src": "string",
            "tipo": myFile.files[0].type
          }

          const filex = {
            dom: document.querySelector('[data-input="file"]'),
            binary: null
          };

          const reader = new FileReader();
          reader.addEventListener("load", function () {
            filex.binary = reader.result;
          });
          if (filex.dom.files[0]) {
            reader.readAsBinaryString(filex.dom.files[0]);
          }
          filex.dom.addEventListener("change", function () {
            if (reader.readyState === FileReader.LOADING) {
              reader.abort();
            }

            reader.readAsBinaryString(filex.dom.files[0]);
          });

          console.log(filex)

          fetch("http://localhost:8080/items", {
            method: "POST",
            body: JSON.stringify(file),
            headers: {
              "content-type": "application/json"
            }
          })
            .then(response => {
              console.log(response)
              response.headers.forEach(r => console.log(r))
              return response.text()
            })
            .then(json => {
              console.log(json)
            })
            ;
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

  getPage() {
    const page = this.url.split("/")[3];
    return page.split(".")[0];
  }

  init() {
    this.pages[this.page]();
  }
}