const helpForm = document.querySelectorAll('.form-help')
let modalBack = document.querySelector('.modal')
helpForm.forEach(elem =>{
    elem.addEventListener('submit', e =>{
        e.preventDefault();
        modalBack.classList.add('active')
        document.body.style.overflow="hidden"
        document.querySelector('.popup-request').classList.add('hidden')
        document.querySelector('.popup-thank').classList.add('active')
    })
})
