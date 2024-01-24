const contactForminputEmail = document.querySelectorAll('.inp.inp_email')
const contactForminputName = document.querySelectorAll('.inp.inp_name')
const contactForminputTopic = document.querySelectorAll('.inp.inp_topic')
const contactForminputText = document.querySelectorAll('.text')
const contactForminputCheckbox = document.querySelectorAll('.inp-checkbox')
const contactFormformButton = document.querySelectorAll('.send')

contactForminputText.forEach(elem => {
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
    contactForminputText.forEach(elem => {
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

contactForminputTopic.forEach(elem => {
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
function inputTopicFunc (){
    contactForminputTopic.forEach(elem => {
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

contactForminputName.forEach(elem => {
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
    contactForminputName.forEach(elem => {
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
    contactForminputEmail.forEach(elem => {
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
contactForminputEmail.forEach(elem => {
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
    contactForminputCheckbox.forEach(elem =>{
            if (elem.checked === false){
                elem.classList.add('error')
            }
    })
}
contactForminputCheckbox.forEach(elem =>{
    elem.addEventListener('input', e =>{
        elem.classList.remove('error')
    })  
})

contactFormformButton.forEach(elem =>{
    elem.addEventListener('click', e =>{
        inputNameFunc()
        inputEmailFunc()
        inputCheckboxFunc()
        inputTextFunc ()
        inputTopicFunc ()
    })
})