export default function loadingAnimation(selector = '[data-main="main"]') {
  const main = document.querySelector(selector);
  main.innerHTML = '<div class="loading"><div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>';
}