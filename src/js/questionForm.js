const questForminputEmail = document.querySelectorAll('.inp.inp_email')
const questForminputName = document.querySelectorAll('.inp.inp_name')
const inputTopic = document.querySelectorAll('.inp.inp_topic')
const inputText = document.querySelectorAll('.text')
const questForminputCheckbox = document.querySelectorAll('.inp-checkbox')
// const formButton = document.querySelectorAll('.send')

inputText.forEach(elem => {
    elem.addEventListener('input', e=>{
        if (elem.value == ''){
            elem.classList.remove('access')
           elem.classList.add('error') 
        }
        else if(elem.value != ''){
            elem.classList.remove('error') 
            elem.classList.add('access')
        }
    })
})

function inputTextFunc (){
    inputText.forEach(elem => {
                if (elem.value == ''){
                    elem.classList.remove('access')
                   elem.classList.add('error') 
                }
                else if(elem.value != ''){
                    elem.classList.remove('error') 
                    elem.classList.add('access')
                }
        })
}

questForminputName.forEach(elem => {
    elem.addEventListener('input', e=>{
        if (elem.value == '' || elem.value.length + 1 <= 2){
            elem.classList.remove('access')
           elem.classList.add('error') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 2){
            elem.classList.remove('error') 
            elem.classList.add('access')
        }
    })
})

function inputNameFunc (){
    questForminputName.forEach(elem => {
                if (elem.value == '' || elem.value.length + 1 <= 2){
                    elem.classList.remove('access')
                   elem.classList.add('error') 
                }
                else if(elem.value != '' && elem.value.length + 1 >= 2){
                    elem.classList.remove('error') 
                    elem.classList.add('access')
                }
        })
}

function inputEmailFunc() {
    questForminputEmail.forEach(elem => {
                if (elem.value == '' || elem.value.length + 1 <= 5 || elem.value.indexOf("@") == -1 || elem.value.indexOf(".") == -1 ){
                    elem.classList.remove('access')
                   elem.classList.add('error') 
                }
                else if(elem.value != '' && elem.value.length + 1 >= 5){
                    elem.classList.remove('error') 
                    elem.classList.add('access')
                }
    })
}
questForminputEmail.forEach(elem => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    elem.addEventListener('input', e =>{
        if (elem.value == '' || elem.value.length + 1 <= 5 || elem.value.indexOf("@") == -1 || elem.value.indexOf(".") == -1 ){
            elem.classList.remove('access')
           elem.classList.add('error') 
        }
        else if(elem.value != '' && elem.value.length + 1 >= 5){
            elem.classList.remove('error') 
            elem.classList.add('access')
        }
    })
})

function inputCheckboxFunc (){
    questForminputCheckbox.forEach(elem =>{
            if (elem.checked === false){
                elem.classList.add('error')
            }
    })
}
questForminputCheckbox.forEach(elem =>{
    elem.addEventListener('input', e =>{
        elem.classList.remove('error')
    })  
})

document.querySelectorAll('.send').forEach(elem =>{
    elem.addEventListener('click', e =>{
        inputNameFunc()
        inputEmailFunc()
        inputCheckboxFunc()
        inputTextFunc ()
    })
})