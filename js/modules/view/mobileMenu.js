import Dom from "./domInteractive.js";

export default function initMobileMenu() {
    const menu = new Dom('.js-menu-sandwich').element();

    const menubar = document.createElement('aside');
    menubar.classList.add('mobile-menu', 'anime-menu');
    menubar.appendChild(document.createElement('nav'));

    const mainHeader = new Dom('.main-header').element();
    document.body.appendChild(menubar);

    const menuElements = new Dom('.mobile').listElements();

    menuElements.forEach(element => {
        const e = element.cloneNode(true);
        e.classList.remove('mobile');
        menubar.firstChild.appendChild(e);
    })

    menu.addEventListener('click', () => {
        menubar.classList.toggle('active');
    })

}