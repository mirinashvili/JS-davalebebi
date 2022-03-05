let isMenuOpen = false;

let menuButton = document.querySelector ('.menu-btn')
let menu = document.querySelector('.menu')

menuButton.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        menuButton.classList.add ('open');
        menu.classList.add ('menu-open');
    } else {
        menuButton.classList.remove ('open');
        menu.classList.remove('menu-open');
    }
 
});

