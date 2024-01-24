let heightMenu = 66

window.addEventListener('scroll', function() {
    if(pageYOffset > 1){
        document.querySelector('.header__row-one').classList.add('hidden')
        document.querySelector('.request-call').classList.add('hidden')
        document.querySelector('.header__row-two').classList.add('active')
        document.querySelector('.header__logo').classList.add('active')
    }
    else{
        document.querySelector('.header__row-two').classList.remove('active')
        document.querySelector('.header__logo').classList.remove('active')
        document.querySelector('.header__row-one').classList.remove('hidden')
        document.querySelector('.request-call').classList.remove('hidden')
    }
  });