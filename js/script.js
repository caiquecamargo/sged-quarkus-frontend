import initPageSelector from "./modules/view/pageSelector";
import ModalMenu from "./modules/view/modalMenu";

window.onload = initPageSelector;

const modalMenu = new ModalMenu();
modalMenu.init();