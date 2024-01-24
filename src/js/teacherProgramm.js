const teacherProgrammmTabs = document.querySelectorAll('.teacher-programm__tab')
const teacherProgrammmFrames = document.querySelector('.teacher-programm__frames')
const teacherProgrammmoOrganization = document.querySelector('.teacher-programm__organization')
teacherProgrammmTabs.forEach(elem => {
    elem.addEventListener('click', e =>{
        for(let i = 0; i < teacherProgrammmTabs.length; i++){
            teacherProgrammmTabs[i].classList.remove('active')
        }
        elem.classList.add('active')
        if(teacherProgrammmTabs[1].classList.contains('active')){
            teacherProgrammmFrames.classList.add('hidden')
            teacherProgrammmFrames.classList.remove('active')
            teacherProgrammmoOrganization.classList.remove('hidden')
            teacherProgrammmoOrganization.classList.add('active')
        }
        else{
            teacherProgrammmFrames.classList.remove('hidden')
            teacherProgrammmFrames.classList.add('active')
            teacherProgrammmoOrganization.classList.add('hidden')
            teacherProgrammmoOrganization.classList.remove('active')
        }
    })
})