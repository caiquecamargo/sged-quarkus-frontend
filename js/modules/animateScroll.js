import Dom from "./domInteractive.js";

export default function initAnimateScroll() {
    const querysToAnimateScroll = new Dom('[data-anime]').listElements();

    if (querysToAnimateScroll.length) {
        const windowEventTrigger = window.innerHeight * .8;

        function animateScroll() {
            querysToAnimateScroll.forEach((item) => {
                item.classList.add(item.dataset.anime);
                const itemTop = item.getBoundingClientRect().top;
                const isItemVisible = (itemTop - windowEventTrigger) < 0;
                if (isItemVisible)
                    item.classList.add('active');
            })
        }

        animateScroll();

        window.addEventListener('scroll', animateScroll);
    }
}