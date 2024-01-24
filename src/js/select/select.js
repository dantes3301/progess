const selectHead = document.querySelector('.select__head')
const select = document.querySelector('.custom-selet')
const selectItems = document.querySelectorAll('.select__item')

selectHead.onclick = () =>{
    select.classList.toggle('active')
}