const btnReadFull = document.querySelector('.read-full')

btnReadFull.onclick = ()=>{
    document.querySelectorAll('.history__text').forEach(elem =>{
        elem.classList.remove('hidden')
        btnReadFull.remove()
    })
}