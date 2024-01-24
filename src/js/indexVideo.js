const btnPlay = document.querySelector('.baner-content__icon')
const modalVideo = document.querySelector('.modal-background-video')
const svgClose = document.querySelector('.madal__video-close')
const video = document.querySelector('.video')
const videoControler = document.querySelectorAll('.video-controler')
const videoContainer = document.querySelector('.modal__video-container')
const videoTag = document.querySelector('.video-tag')

btnPlay.onclick = function PlayVideo () {
    document.body.style.overflow = 'hidden'
    modalVideo.classList.add('active')
}
if(videoTag){
    videoControler.forEach(elem =>{
        elem.addEventListener('click', e =>{
            if(videoControler[0].classList.contains('active')){
                videoTag.play()
                videoContainer.classList.add('active')
                videoControler[0].classList.remove('active')
                videoControler[1].classList.add('active')
                function addHidden (){
                    videoControler[1].classList.add('hidden')
                }
                setTimeout(addHidden, 1000)
            }
            else{
                videoTag.pause()
                videoContainer.classList.remove('active')
                videoControler[0].classList.add('active')
                videoControler[1].classList.remove('active')
                videoControler[1].classList.remove('hidden')
            }
        })
    })
    
    
    svgClose.onclick = () => {
            videoTag.pause()
            videoContainer.classList.remove('active')
            videoControler[0].classList.add('active')
            videoControler[1].classList.remove('active')
            videoControler[1].classList.remove('hidden')
        modalVideo.classList.remove('active')
        document.body.style.overflow = 'visible'
    }
}
if(video){
    videoControler.forEach(elem =>{
        elem.addEventListener('click', e =>{
            if(videoControler[0].classList.contains('active')){
                video.contentWindow.postMessage(JSON.stringify({ event: 'command',
                func: 'playVideo', "args": ""}), '*')
                videoContainer.classList.add('active')
                videoControler[0].classList.remove('active')
                videoControler[1].classList.add('active')
                function addHidden (){
                    videoControler[1].classList.add('hidden')
                }
                setTimeout(addHidden, 1000)
            }
            else{
                video.contentWindow.postMessage(JSON.stringify({ event: 'command',
                func: 'pauseVideo', "args": ""}), '*')
                videoContainer.classList.remove('active')
                videoControler[0].classList.add('active')
                videoControler[1].classList.remove('active')
                videoControler[1].classList.remove('hidden')
            }
        })
    })
    
    
    svgClose.onclick = () => {
        video.contentWindow.postMessage(JSON.stringify({ event: 'command',
            func: 'pauseVideo', "args": ""}), '*')
            videoContainer.classList.remove('active')
            videoControler[0].classList.add('active')
            videoControler[1].classList.remove('active')
            videoControler[1].classList.remove('hidden')
        modalVideo.classList.remove('active')
        document.body.style.overflow = 'visible'
    }
}