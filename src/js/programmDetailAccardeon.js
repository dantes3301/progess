const managerAccardeonHead = document.querySelectorAll('.manager__accardeon-head')

managerAccardeonHead.forEach(elem =>{
    elem.addEventListener('click', e =>{
        elem.parentElement.classList.toggle('active')
        
    })
})