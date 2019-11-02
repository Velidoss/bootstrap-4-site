const gambitGalleryIsInView = el => {
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = el.getBoundingClientRect().top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
}


// Usage.
document.addEventListener('DOMContentLoaded', () => {
    let ids = ['video-area-title-animate', 'video-area-button-animate'];
    // const tester = document.getElementById('video-area-title-animate')
    for (let id of ids) {
        const tester = document.getElementById(id)
        const handler = () => raf(() => {

            if (gambitGalleryIsInView(tester)) {
                if (!tester.classList.contains('video-area-title-animation')) {
                    tester.classList.add('video-area-title-animation');
                }
            }

        })
    }


    handler()
    window.addEventListener('scroll', handler)
})

// requestAnimationFrame
const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }