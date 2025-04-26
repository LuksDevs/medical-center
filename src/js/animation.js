

ScrollReveal().reveal('.card-icon', {
    reset: true,
    beforeReveal: (el) => {
        el.style.transform = 'scaleX(1)';
    },
    beforeReset: (el) => {
        el.style.transform = 'scaleX(-1)';
    }
});

ScrollReveal().reveal('.card-item, #btn_lab, #img_about', {
    opacity: 0.3,
    duration: 1500,
    scale: 0.8,
    reset: true
});

ScrollReveal().reveal('#title_lab, #title_about', {
    origin: 'left',
    distance: '60px',
    opacity: 0,
    duration: 3000,
    reset: true
});

ScrollReveal().reveal('#about_icon, #img_description', {
    reset: true,
    rotate: {
        x: 50,
        y: 0,
        z: 0
    },
    opacity: 0.5,
    duration: 1000
});

ScrollReveal().reveal('.cards-status', {
    origin: 'bottom',
    distance: '70%',
    duration: 1800,
    opacity: 0.5,
    reset: true
});

ScrollReveal().reveal('.card-more', {
    rotate: {
        x: 100,
        y: 0,
        z: 0
    },
    duration: 2000,
    opacity: 0.4,
    reset: true
})