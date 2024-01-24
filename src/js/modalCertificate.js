const certificate = document.querySelectorAll('.certificate__image')
const modalImg = document.querySelector('.modal-background-image')
const imageContainer = document.querySelector('.img')
const svgCloseCertificate = document.querySelector('.madal__image-close')

certificate.forEach(cert => {
    cert.addEventListener('click', e =>{
        modalImg.classList.add('active')
        document.body.style.overflow = 'hidden'
        imageContainer.src = cert.firstElementChild.src
    })
})
svgCloseCertificate.onclick = () => {
    modalImg.classList.remove('active')
    document.body.style.overflow = 'visible'
}