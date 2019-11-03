    // The checker
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
    const idsAnimationLeftRight = new Array('btn-primary-animate', 'inner-about-img-animate', 'inner-about-img-animate', 'features-inner-left-animate');
    const idsAnimationRightLeft = new Array('btn-secondary-animate', 'inner-about-title-animate', 'features-inner-right-animate');
    const idsAnimationUpDown = new Array('home-phone-animate');
    const idsAnimationDownUp = new Array('inner-about-desc-animate', 'available-store-img-animate');
    const idsAnimationRunFromLeft = new Array('video-area-title-animate', 'video-area-button-animate', 'call-to-action-text-animate', 'call-to-action-btn-warning-animate', 'facts-item-animate');
    const idsAnimationRunFromRight = new Array('you-video-animate', 'screen-slider-animate', 'available-store-text-animate', 'available-store-fab-animate', 'social-media-animate');
    const idsAnimationRunFromUp = new Array('carousel-clients');
    const idsAnimationBounceIn = new Array('features-inner-phone-animate', 'contact-form-animate');
    const idsAnimationLightSpeedIn = new Array('subscribe-title-animate', 'subscribe-form-animate', 'subscribe-form-btn-animate');

    for (let id of idsAnimationLeftRight) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationLeftRight')) {
                    anim.classList.add('animationLeftRight');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationRightLeft) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationRightLeft')) {
                    anim.classList.add('animationRightLeft');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationUpDown) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationUpDown')) {
                    anim.classList.add('animationUpDown');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationDownUp) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationDownUp')) {
                    anim.classList.add('animationDownUp');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationRunFromLeft) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationrunFromLeft')) {
                    anim.classList.add('animationrunFromLeft');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationRunFromRight) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationrunFromRight')) {
                    anim.classList.add('animationrunFromRight');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationRunFromUp) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationrunFromUp')) {
                    anim.classList.add('animationrunFromUp');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationBounceIn) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationbounceIn')) {
                    anim.classList.add('animationbounceIn');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
    for (let id of idsAnimationLightSpeedIn) {
        let anim = document.getElementById(id)
        let handler = () => raf(() => {
            if (gambitGalleryIsInView(anim)) {
                if (!anim.classList.contains('animationlightSpeedIn')) {
                    anim.classList.add('animationlightSpeedIn');
                }
            }
        })
        handler()
        window.addEventListener('scroll', handler)
    }
})

// requestAnimationFrame
const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }