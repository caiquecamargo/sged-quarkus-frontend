import Dom from "./domInteractive.js";

export default function initAnimateMenu() {
    const menu = new Dom('.js-animate-menu > li').listElements();
    const menuItens = new Dom('.js-animate-menu li ul');
    const offsetx = menu[0].getBoundingClientRect().width;

    function animateMenu(index) {
        const m = menuItens.listElements();
        if (m.length > index) {
            m[index].style.left = ((offsetx + 15) * index) + 'px';
            m[index].classList.add('active');
        }
    }

    function animateMenuLeave() {
        menuItens.disableAll();
    }

    menu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('mouseenter', () => {
            animateMenu(index);
        });
        itemMenu.addEventListener('mouseleave', animateMenuLeave);
    });
}