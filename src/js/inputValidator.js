
const formButton = document.querySelectorAll('.send')
const inputEmail = document.querySelectorAll('.inp.inp_email')
const inputName = document.querySelectorAll('.inp.inp_name')
const phone = document.querySelectorAll('.inp.inp_phone')
const inputCheckbox = document.querySelectorAll('.inp-checkbox')

inputCheckbox.forEach(elem =>{
    elem.addEventListener('input', e =>{
        elem.classList.remove('error')
    })  
})
phone.forEach(elem => {
    elem.addEventListener('input', e=>{
        if (elem.value.length < 18){
            elem.classList.remove("access")
            elem.classList.add("error")
        }
        else{
            elem.classList.remove("error")
            elem.classList.add("access")
        }
    })
})
inputName.forEach(elem => {
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

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.inp.inp_phone'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

function inputNameFunc (){
    inputName.forEach(elem => {
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
function inputPhoneFunc(){
    phone.forEach(elem => {
        if (elem.value.length < 18){
            elem.classList.remove("access")
            elem.classList.add("error")
        }
        else{
            elem.classList.remove("error")
            elem.classList.add("access")
        }
    })
}
function inputEmailFunc() {
    inputEmail.forEach(elem => {
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
inputEmail.forEach(elem => {
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
    inputCheckbox.forEach(elem =>{
            if (elem.checked === false){
                elem.classList.add('error')
            }
    })
}
formButton.forEach(elem =>{
    elem.addEventListener('click', e =>{
        inputNameFunc()
        inputPhoneFunc()
        inputEmailFunc()
        inputCheckboxFunc()
    })
})