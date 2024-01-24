const selectHead = document.querySelector('.training-center__select-head')
const select = document.querySelector('.training-center__select')

selectHead.onclick = () =>{
    select.classList.toggle('active')
}