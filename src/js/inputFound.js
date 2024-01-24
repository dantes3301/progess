const inputFound = document.querySelector('.inp.inp_found')
const opionsValue = document.querySelector('.inp_found__options')
const deleteText = document.querySelector('.inp_found__delete')
const foundBtn = document.querySelector('.input-container__icon')

inputFound.addEventListener('input', e =>{
    if(inputFound.value.length > 0){
        inputFound.parentElement.classList.add('active')
        opionsValue.firstElementChild.innerText = inputFound.value
        opionsValue.classList.remove('error')
        inputFound.classList.remove('error')
    }
    else{
        inputFound.parentElement.classList.remove('active')
    }
})
if(deleteText){
    deleteText.onclick = () =>{
        inputFound.value = ''
        inputFound.parentElement.classList.remove('active')
    }
}
foundBtn.onclick = () =>{
    opionsValue.firstElementChild.innerText = 'Результатов нет, попробуйте изменить запрос и попробовать еще раз'
    opionsValue.classList.add('error')
    inputFound.classList.add('error')
}