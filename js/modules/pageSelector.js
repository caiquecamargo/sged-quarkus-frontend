import Dom from "./domInteractive";
import AsideMenu from "./asideMenu";
import initPortfolio from "./portfolio";
import initAnimateGrowthItem from "./animateGrowthItem";
import ReplaceHTML from "./replaceHTML";

export default function initPageSelector() {
  function handleClick(event) {
    event.preventDefault();
    loadingAnimation();
    window.history.pushState(null, null, event.target.href);
    fetchPage(event.target.href);
  }

  function loadingAnimation() {
    const main = document.querySelector('[data-main="main"]');
    main.innerHTML = '<div class="loading"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
  }

  async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageHtml = await pageResponse.text();
    const replaceHTML = new ReplaceHTML(pageHtml);
    replaceHTML.init();
    asideMenu.attAsideDisplay();

    addingEventListenerToButtons();
    callingPortfolioHandler();
    removerActiveFromMobileMenu();
  }

  window.addEventListener('popstate', () => {
    fetchPage(window.location.href);
  })

  function removerActiveFromMobileMenu() {
    const mobileMenu = new Dom('[data-aside="menu-mobile"]').element();
    const menuSandwich = new Dom('[data-aside="menu-sandwich"]').element();

    if (menuSandwich.classList.contains('active')) menuSandwich.classList.remove('active');
    if (mobileMenu.classList.contains('active')) mobileMenu.classList.remove('active');
  }

  function addingEventListenerToButtons() {
    const buttons = new Dom('[data-link]').listElements();
    buttons.forEach(button => {
      button.addEventListener('click', handleClick);
    })

  }

  function callingPortfolioHandler() {
    const myPage = window.location.pathname.split("/").pop();
    if (myPage === "portfolio.html") {
      initPortfolio();
      window.onload = initAnimateGrowthItem;
    }
  }

  let init = false;
  const asideMenu = new AsideMenu();
  asideMenu.init();

  if (!init) {
    addingEventListenerToButtons();
    callingPortfolioHandler();
    init = true;
  };
}