const selectHeadReviews = document.querySelector('.select-reviews__head')
const selectTextReviews = document.querySelector('.select-reviews__text')
const selectReviews = document.querySelector('.select-reviews')
const selectItemsReviews = document.querySelectorAll('.select-reviews__item')
const reviewsAlumni = document.querySelector('.reviews__alumni')
const reviewsCompany = document.querySelector('.reviews__company')

selectHeadReviews.onclick = () =>{
    selectReviews.classList.toggle('active')
}
selectItemsReviews.forEach(elem =>{
    elem.addEventListener('click', e=>{
        selectTextReviews.innerHTML = elem.textContent
        selectTextReviews.classList.add('active')
        for (let i = 0; i < selectItemsReviews.length; i++) {
            selectItemsReviews[i].classList.remove('active')
            
        }
        elem.classList.add('active')
        if(selectItemsReviews[0].classList.contains('active')){
            reviewsAlumni.classList.add('active')
            reviewsCompany.classList.remove('active')
        }
        else{
            reviewsAlumni.classList.remove('active')
            reviewsCompany.classList.add('active')
        }
        selectReviews.classList.toggle('active')
    })
})