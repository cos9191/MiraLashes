const header = document.querySelector('header');
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

// Event listener for clicks on the document
  document.addEventListener('click', function(event) {
    let targetElement = event.target;

    // Check if the clicked element is within the menu or the menu burger button
    let isMenuClick = header.contains(targetElement) || targetElement === burgerWrapper;

    // Check if the clicked element is within header or link
    let isLinkInHeader = targetElement.tagName === 'A' && header.contains(targetElement);

    // If the clicked element is outside the menu or an <a> tag in the header, close the menu
    if (!isMenuClick || isLinkInHeader) {
      navMenu.classList.remove(navMenuClosedState)
      burgerButton.classList.remove(burgerButtonOpenedState)
    }
  });
}

export { initNavMenu }
