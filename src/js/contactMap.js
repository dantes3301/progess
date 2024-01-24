function init(){
    let map = new ymaps.Map('contact__map', {
        center: [54.732948, 55.968285],
        zoom: 15
    })
    let placeMark = new ymaps.Placemark([54.732948, 55.968285], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/mark.svg',
        iconImageSize: [50, 76],
        iconImageOffset: [0, 0]
    })
    map.geoObjects.add(placeMark)
}
ymaps.ready(init)