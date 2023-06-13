const navMenu = document.querySelector('.header__nav-list')
const burgerWrapper = document.querySelector('.header__burger-wrapper')
const burgerButton = burgerWrapper.querySelector('.header__burger')
const burgerButtonOpenedState =  'header__burger--opened';
const navMenuClosedState = 'header__nav-list--opened';

// Открываем/закрываем меню навигации по нажатию на бургер, анимируем бургер
const initNavMenu = () => {

  burgerWrapper.addEventListener('click', function () {

    if (navMenu.classList.contains(navMenuClosedState)) {
      navMenu.classList.toggle(navMenuClosedState)
      burgerButton.classList.toggle(burgerButtonOpenedState)
      return
    }

    navMenu.classList.toggle(navMenuClosedState)
    burgerButton.classList.toggle(burgerButtonOpenedState)
  })
}

export { initNavMenu }
