import Element from "./elements"

export default class AsideMenu {
  constructor(dataAside) {
    if (dataAside === undefined) {
      this.dataAside = this.createElements();
    } else {
      this.dataAside = dataAside;
    }

    this.aside_config = {
      "minhaconta": () => {
        this.deactive();
        this.active("minhaconta");
      },
      "adicionarItem": () => {
        this.deactive();
        this.active("adicionarItem");
      },
      "visualizarItem": () => {
        this.deactive();
        this.active("visualizarItem");
      },
      "adicionarGrupo": () => {
        this.deactive();
        this.active("adicionarGrupo");
      },
      "visualizarGrupos": () => {
        this.deactive();
        this.active("visualizarGrupos");
      },
      "validarUsuario": () => {
        this.deactive();
        this.active("validarUsuario");
      },
      "visualizarUsuarios": () => {
        this.deactive();
        this.active("visualizarUsuarios");
      }
    }
  }

  createElements() {
    const elements = [...document.querySelectorAll('[data-link]')];
    return elements.map(element => new Element(element));
  }

  deactive() {
    this.dataAside.forEach(element => {
      element.removeClass();
    });
  }

  active(node) {
    const item = this.dataAside.filter(element => element.dataset('link') === node).pop();
    item.addClass();
  }

  attAsideDisplay(myPage) {
    if (myPage != '') this.aside_config[myPage]();
  }
}