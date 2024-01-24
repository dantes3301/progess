const btnBurger = document.querySelector('.button-burger')
const mobileMenu = document.querySelector('.header__mibile-menu')

btnBurger.onclick = function togglemobileMenu () {
    btnBurger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    if(document.body.style.overflow === 'hidden'){
        document.body.style.overflow = 'visible'
    }
    else{
        document.body.style.overflow = 'hidden'
    }
}

