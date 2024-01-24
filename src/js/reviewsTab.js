const reviewsTab = document.querySelectorAll('.reviews__tab')
const reviewsAlumniDesk = document.querySelector('.reviews__alumni')
const reviewsCompanyDesk = document.querySelector('.reviews__company')

reviewsTab.forEach(elem =>{
    elem.addEventListener('click', e =>{
        for(let i = 0; i < reviewsTab.length; i++){
            reviewsTab[i].classList.remove('active')
        }
        elem.classList.add('active')
        if(reviewsTab[0].classList.contains('active')){
            reviewsAlumniDesk.classList.add('active')
            reviewsCompanyDesk.classList.remove('active')
        }
        else{
            reviewsAlumniDesk.classList.remove('active')
            reviewsCompanyDesk.classList.add('active')
        }
    })
})