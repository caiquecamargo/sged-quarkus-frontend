export default function initScrollSuaveLinkInterno() {
  const links = document.querySelectorAll('[data-sumario="item"]');

  links.forEach(link => {
    link.addEventListener('click', scrollToDoOnClick)
  })

  function scrollToDoOnClick(event) {
    event.preventDefault();
    closeMenuMobile();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  function closeMenuMobile() {
    const menuMobile = document.querySelector('[data-aside="menu-mobile"');
    const mobileButton = document.querySelector('[data-aside="menu-sandwich"');

    menuMobile.classList.toggle('active');
    mobileButton.classList.toggle('active');
  }
}