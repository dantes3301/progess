const accardeonTitle = document.querySelectorAll('.organization__accardeon-header')
const accardeonIcon  = document.querySelectorAll('.organization__accardeon-icon')
accardeonTitle.forEach(elem =>{
    elem.addEventListener('click', e=>{
        elem.parentElement.classList.toggle('active')
    })
})
accardeonIcon.forEach(elem =>{
    elem.addEventListener('click', e=>{
        elem.parentElement.classList.toggle('active')
    })
})