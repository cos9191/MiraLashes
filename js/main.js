import {initSwiper} from './init-swiper.js';
import {initNavMenu} from './modules/navMenu.js';
import {initAccordions} from './init-accordion.js';
import {initModals} from "./init-modals.js";

window.addEventListener('DOMContentLoaded', () => {

    // Utils
    // ---------------------------------


    // Modules
    // ---------------------------------

    // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
    // в load следует добавить скрипты, не участвующие в работе первого экрана
    window.addEventListener('load', () => {
        initNavMenu();
        initSwiper();
        initAccordions();
        initModals();
    });
});
