const tagsSelectHead = document.querySelector('.tags-select__head')
const tagsBtnClose = document.querySelector('.navigation-btn')

tagsBtnClose.onclick = () =>{
    tagsSelectHead.parentElement.classList.remove('active')
    document.body.style.overflow = 'visible'
}
tagsSelectHead.onclick = () =>{
    tagsSelectHead.parentElement.classList.add('active')
    document.body.style.overflow = 'hidden'

}
