function bindEvents() {
    const btnNavbar = document.querySelector('#btn_navbar');
    const closeNavbar = document.querySelector('#close_navbar');
    const blurBlack = document.querySelector('#blur_black');

    btnNavbar.addEventListener('click', openNavBar);
    closeNavbar.addEventListener('click', closeNavBar);
    blurBlack.addEventListener('click', closeNavBar);
}

function openNavBar() {
    const containerNavbar = document.querySelector('#container_navbar');
    containerNavbar.classList.add('active');
}

function closeNavBar() {
    const containerNavbar = document.querySelector('#container_navbar');
    containerNavbar.classList.remove('active');
}

bindEvents();
