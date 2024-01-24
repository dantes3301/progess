const btnOpenModal = document.querySelectorAll('[data-id]')

btnOpenModal.forEach(elem => {
    elem.addEventListener('click', e=>{
        const modalRequest = document.getElementById(elem.dataset.id);
        modalRequest.classList.add('active')
        modalRequest.querySelector('.popup-request').classList.remove('hidden')
        modalRequest.querySelector('.popup-thank').classList.remove('active')
        document.body.style.overflow = 'hidden'
        document.querySelectorAll('.modal__form-close').forEach(elem =>{
            elem.addEventListener('click', e =>{
                modalRequest.classList.remove('active')
                document.body.style.overflow = 'visible'
            })
        })
        modalRequest.querySelector('.call-form').addEventListener('submit', e =>{
            e.preventDefault();
            modalRequest.querySelector('.popup-request').classList.add('hidden')
            modalRequest.querySelector('.popup-thank').classList.add('active')
            modalRequest.querySelectorAll('.inp').forEach(elem => {
                elem.value = ''
                elem.classList.remove('error')
                elem.classList.remove('access')
        
            })
            modalRequest.querySelectorAll('.inp-checkbox').forEach(elem =>{
                elem.checked = !elem.checked
            })
        })
        document.querySelectorAll('.close').forEach(elem =>{
            elem.addEventListener('click', e =>{
                document.body.style.overflow = 'visible'
                modalRequest.classList.remove('active')
            })
        })
        
        // modalRequest.querySelector('.popup-thank')
    })
    
})
