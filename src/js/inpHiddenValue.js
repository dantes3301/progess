const courseTitle = document.querySelector('.manager__title').firstElementChild
const btnInputValue = document.querySelector('.input-value')
const inputHidden = document.querySelector('.input-hidden')

btnInputValue.onclick = () =>{
    inputHidden.value = courseTitle.textContent
    console.log(inputHidden.value,courseTitle.textContent);
}