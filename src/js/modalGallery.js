const galleryCard = document.querySelectorAll('.gallery__card')
const modalGallery = document.querySelector('.modal-background-gallery')
const svgClose = document.querySelector('.madal__gallery-close')

galleryCard.forEach(card => {
    card.addEventListener('click', e =>{
        modalGallery.classList.add('active')
        document.body.style.overflow = 'hidden'
    })
})
svgClose.onclick = () => {
    modalGallery.classList.remove('active')
    document.body.style.overflow = 'visible'
}

let imageNum = 0
let imageActive = document.getElementById('image-active')
let imagesAll = document.querySelectorAll('.gallery-swipper-item')
let btnPrev = document.querySelector('.gallery-swipper-prev')
let btnNext = document.querySelector('.gallery-swipper-next')

btnNext.onclick = function nextImage(){
    imageNum++
    if(imageNum > imagesAll.length - 1){
        imageNum = 0
    }
    imageActive.src = imagesAll[imageNum].firstElementChild.src
}
btnPrev.onclick = function prevImage(){
    imageNum--
    if(imageNum < 0){
        imageNum = imagesAll.length - 1 
    }
    imageActive.src = imagesAll[imageNum].firstElementChild.src
}

imagesAll.forEach(elem =>{
    elem.addEventListener('click', e =>{
        imageActive.src = elem.firstElementChild.src
    })
})