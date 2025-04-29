

ScrollReveal().reveal('.card-icon', {
    reset: true,
    beforeReveal: (el) => {
        el.style.transform = 'scaleX(1)';
    },
    beforeReset: (el) => {
        el.style.transform = 'scaleX(-1)';
    }
});

ScrollReveal().reveal('.card-item, #btn_lab, #img_about, #btn_our_services, .cards-status', {
    opacity: 0.3,
    duration: 1500,
    scale: 0.8,
    reset: true
});

ScrollReveal().reveal('#title_lab, #title_about, #title_home', {
    origin: 'left',
    distance: '60px',
    opacity: 0,
    duration: 3000,
    reset: true
});

ScrollReveal().reveal('#about_icon, #img_description, #btn_home', {
    reset: true,
    rotate: {
        x: 50,
        y: 0,
        z: 0
    },
    opacity: 0.5,
    duration: 1000
});


ScrollReveal().reveal('.card-more', {
    rotate: {x: 100, y: 0, z: 0},
    duration: 2000,
    opacity: 0.4,
    reset: true
});

ScrollReveal().reveal('.icon-resources img', {
    rotate: {x: 0, y: 50, z: 0},
    opacity: 0.4,
    duration: 2000,
    reset: true
});