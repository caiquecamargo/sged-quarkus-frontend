import AsideMenu from "./asideMenu";
import PageHandler from "../control/pageHandler";
import loadingAnimation from "./loading_animation";
import Buttons from "./buttons";
import backendBridge from "../control/backendBridge";

export default function initPageSelector() {
  async function fetchPage(url) {
    const response = await fetch(url);
    const pageHtml = await response.text();
    const backendData = await backendBridge(getPage(url));
    const pageHandler = new PageHandler(pageHtml, url, backendData);
    pageHandler.init();
    asideMenu.attAsideDisplay(getPage(url));
  }

  function getPage(url) {
    const page = url.split("/")[3];
    return page.split(".")[0];
  }

  function handleClick(event) {
    event.preventDefault();
    loadingAnimation();
    // window.history.pushState(null, null, event.target.href);
    fetchPage(event.target.href);
  }

  // window.addEventListener('popstate', () => {
  //   fetchPage(window.location.href);
  // })

  const asideMenu = new AsideMenu();
  const buttons = new Buttons('[data-link]');
  buttons.addEventListenerToButtons((button) => {
    button.addEventListener('click', handleClick);
  });
}