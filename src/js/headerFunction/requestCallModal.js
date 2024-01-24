const btnRequestCall = document.querySelectorAll('.open-modal')
const modal = document.querySelector('.modal')
const btnSend = document.querySelector('.send')
const btnClose = document.querySelector('.close')

btnRequestCall.forEach(elem =>{
    elem.addEventListener('click', e =>{
        function openModalRequestCall (){
            modal.classList.add('active')
            document.querySelector('.popup-request').classList.remove('hidden')
            document.querySelector('.popup-thank').classList.remove('active')
            document.body.style.overflow = 'hidden'
        }
        openModalRequestCall()
    })
})

document.querySelectorAll('.form-help').forEach(elem =>{
    elem.addEventListener('submit', e =>{
        e.preventDefault();
        document.querySelector('.popup-request').classList.add('hidden')
        document.querySelector('.popup-thank').classList.add('active')
        document.querySelectorAll('.inp').forEach(elem => {
            elem.value = ''
            elem.classList.remove('error')
            elem.classList.remove('access')
    
        })
        document.querySelectorAll('.text').forEach(elem =>{
            elem.classList.remove('error')
            elem.classList.remove('access')
            elem.value = ''
        })
        document.querySelectorAll('.inp-checkbox').forEach(elem =>{
            elem.checked = false
            elem.classList.remove('error')
        })
    })
})

document.querySelectorAll('.call-form').forEach(elem =>{
    elem.addEventListener('submit', e =>{
        e.preventDefault();
        document.querySelector('.popup-request').classList.add('hidden')
        document.querySelector('.popup-thank').classList.add('active')
        document.querySelectorAll('.inp').forEach(elem => {
            elem.value = ''
            elem.classList.remove('error')
            elem.classList.remove('access')
    
        })
        document.querySelectorAll('.inp-checkbox').forEach(elem =>{
            elem.checked = false
            elem.classList.remove('error')
        })
    })
})
document.querySelector('.modal__form-close').onclick = function closeModal(){
    document.body.style.overflow = 'visible'
    modal.classList.remove('active')
}
btnClose.onclick = function closeModalTwo(){
    document.body.style.overflow = 'visible'
    modal.classList.remove('active')
}