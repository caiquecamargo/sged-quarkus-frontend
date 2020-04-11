import Menu from "./menu"
import Buttons from "./buttons"

export default class AsideMenu {
  constructor(dataAside) {
    if (dataAside === undefined) {
      this.dataAside = {
        menuMobile: new Menu('[data-aside="menu-mobile"]'),
        menuSandwich: new Menu('[data-aside="menu-sandwich"]'),
        menuSumario: new Menu('[data-aside="sumario"]'),
        mainMenu: new Menu('[data-aside="main-menu"]'),
        menuMobileSumario: new Menu('[data-sumario="menu"'),
        externalLinks: new Buttons('[data-externo]'),
        whoWeAre: new Buttons('[data-active="who-we-are"]'),
        portfolio: new Buttons('[data-active="portfolio"]')
      };
    } else {
      this.dataAside = dataAside;
    }

    this.aside_config = {
      index: () => {
        this.dataAside.menuMobile.hide();
        this.dataAside.menuSumario.hide();
        this.dataAside.mainMenu.hide();
        this.dataAside.menuMobileSumario.hide();
        this.dataAside.whoWeAre.removeClass();
        this.dataAside.portfolio.removeClass();
      },
      portfolio: () => {
        this.dataAside.menuMobile.show();
        this.dataAside.menuSumario.show();
        this.dataAside.mainMenu.show();
        this.dataAside.menuMobileSumario.show();
        this.dataAside.whoWeAre.removeClass();
        this.dataAside.portfolio.addClass();
      },
      "quem-somos": () => {
        this.dataAside.menuMobile.show();
        this.dataAside.menuSumario.hide();
        this.dataAside.mainMenu.show();
        this.dataAside.menuMobileSumario.hide();
        this.dataAside.whoWeAre.addClass();
        this.dataAside.portfolio.removeClass();
      }
    }
  }

  addToggleEvent() {
    this.dataAside.menuSandwich.menu.addEventListener('click', (event) => {
      event.preventDefault();
      this.dataAside.menuMobile.toggle();
      this.dataAside.menuSandwich.toggle();
    });
  }

  closeMenu() {
    this.dataAside.menuSandwich.removeClass();
    this.dataAside.menuMobile.removeClass();
  }

  addEventToExternalLinks() {
    this.dataAside.externalLinks.addEventListenerToButtons((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(event.target.href);
      });
    })
  }

  attAsideDisplay() {
    const myPage = window.location.pathname.split("/").pop().split('.')[0];
    if (myPage != '') this.aside_config[myPage]();
    this.closeMenu()
  }

  init() {
    this.addToggleEvent();
    this.addEventToExternalLinks();
    this.attAsideDisplay();
    return this;
  }
}