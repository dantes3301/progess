const selectHead = document.querySelector('.select-city__head')
const selectText = document.querySelector('.select-city__text')
const select = document.querySelector('.select-city')
const selectItems = document.querySelectorAll('.select-city__item')

selectHead.onclick = () =>{
    select.classList.toggle('active')
}
selectItems.forEach(elem =>{
    elem.addEventListener('click', e=>{
        selectText.innerHTML = elem.textContent
        selectText.classList.add('active')
        select.classList.toggle('active')
    })
})