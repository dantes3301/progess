const accardeonHead = document.querySelectorAll('.accardeon__head')

accardeonHead.forEach(elem =>{
    elem.addEventListener('click', e=>{
        elem.parentElement.classList.toggle('active')
    })
})