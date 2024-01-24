const tag = document.querySelectorAll('.tag')

tag.forEach(elem =>{
    elem.addEventListener('click', e =>{
        elem.classList.toggle('active')
    })
})