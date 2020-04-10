import outsideClick from "./outsideClick.js";

export default class AsideMenu {
  constructor(dataAside, externalLinks) {
    if (dataAside === undefined) {
      this.dataAside = {
        menuMobile: '[data-aside="menu-mobile"]',
        menuSandwich: '[data-aside="menu-sandwich"]',
        menuSumario: '[data-aside="sumario"]',
        mainMenu: '[data-aside="main-menu"]'
      };
    } else {
      this.dataAside = dataAside;
    }

    if (externalLinks === undefined) this.externalLinks = '[data-externo]';
    else this.externalLinks = externalLinks;

    this.menuMobile = document.querySelector(this.dataAside.menuMobile);
    this.menuSandwich = document.querySelector(this.dataAside.menuSandwich);
    this.menuSumario = document.querySelector(this.dataAside.menuSumario);
    this.mainMenu = document.querySelector(this.dataAside.mainMenu);
    this.externalLinks = document.querySelectorAll(this.externalLinks);

    this.aside_config = {
      index: () => {
        if (!this.aside_config.asideMobile.classList.contains('display-none')) this.aside_config.asideMobile.classList.add('display-none');
        if (!this.aside_config.asideSumario.classList.contains('display-none')) this.aside_config.asideSumario.classList.add('display-none');
        if (!this.aside_config.asideMenu.classList.contains('display-none')) this.aside_config.asideMenu.classList.add('display-none');
        this.aside_config.asideActiveWhoWeAre.forEach(item => {
          if (item.classList.contains('active')) item.classList.remove('active');
        })
        this.aside_config.asideActivePortfolio.forEach(item => {
          if (item.classList.contains('active')) item.classList.remove('active');
        })
        this.aside_config.asideSumarioActive.forEach(item => {
          if (!item.classList.contains('display-none')) item.classList.add('display-none');
        })
      },
      portfolio: () => {
        if (this.aside_config.asideMobile.classList.contains('display-none')) this.aside_config.asideMobile.classList.remove('display-none');
        if (this.aside_config.asideSumario.classList.contains('display-none')) this.aside_config.asideSumario.classList.remove('display-none');
        if (this.aside_config.asideMenu.classList.contains('display-none')) this.aside_config.asideMenu.classList.remove('display-none');
        this.aside_config.asideActiveWhoWeAre.forEach(item => {
          if (item.classList.contains('active')) item.classList.remove('active');
        })
        this.aside_config.asideActivePortfolio.forEach(item => {
          if (!item.classList.contains('active')) item.classList.add('active');
        })
        this.aside_config.asideSumarioActive.forEach(item => {
          if (item.classList.contains('display-none')) item.classList.remove('display-none');
        })
      },
      "quem-somos": () => {
        if (this.aside_config.asideMobile.classList.contains('display-none')) this.aside_config.asideMobile.classList.remove('display-none');
        if (!this.aside_config.asideSumario.classList.contains('display-none')) this.aside_config.asideSumario.classList.add('display-none');
        if (this.aside_config.asideMenu.classList.contains('display-none')) this.aside_config.asideMenu.classList.remove('display-none');
        this.aside_config.asideActiveWhoWeAre.forEach(item => {
          if (!item.classList.contains('active')) item.classList.add('active');
        })
        this.aside_config.asideActivePortfolio.forEach(item => {
          if (item.classList.contains('active')) item.classList.remove('active');
        })
        this.aside_config.asideSumarioActive.forEach(item => {
          if (!item.classList.contains('display-none')) item.classList.add('display-none');
        })
      }
    }
  }

  addToggleEvent() {
    this.menuSandwich.addEventListener('click', (event) => {
      event.preventDefault();
      this.menuMobile.classList.toggle('active');
      this.menuSandwich.classList.toggle('active');
    });

    // this.mainMenu.addEventListener('click', event => {
    //   event.preventDefault();
    //   this.mainMenu.classList.toggle('active');
    //   outsideClick(mainMenu, ['click'], () => {
    //     this.mainMenu.classList.remove('active');
    //   })
    // })

    // menuSumario.addEventListener('click', event => {
    //   event.preventDefault();
    //   this.menuSumario.classList.toggle('active');
    //   outsideClick(menuSumario, ['click'], () => {
    //     this.menuSumario.classList.remove('active');
    //   })
    // })
  }

  addEventToExternalLinks() {
    this.externalLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(event.target.href);
      });
    })
  }

  attAsideDisplay() {
    const aside = document.querySelectorAll('aside');
    const myPage = window.location.pathname.split("/").pop().split('.')[0];
    this.aside_config.asideActiveWhoWeAre = document.querySelectorAll('[data-active="who-we-are"]');
    this.aside_config.asideActivePortfolio = document.querySelectorAll('[data-active="portfolio"]');
    this.aside_config.asideSumarioActive = document.querySelectorAll('[data-sumario="menu"');
    [this.aside_config.asideMobile, this.aside_config.asideSumario, this.aside_config.asideMenu] = aside;
    if (myPage != '') this.aside_config[myPage]();
  }

  init() {
    this.addToggleEvent();
    this.addEventToExternalLinks();
    this.attAsideDisplay();
    return this;
  }
}