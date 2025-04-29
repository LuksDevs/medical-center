
export function bindEvents() {
    document.querySelector('#btn_navbar').addEventListener('click', openNavBar);
    document.querySelector('#close_navbar').addEventListener('click', closeNavBar);
    document.querySelector('#blur_black').addEventListener('click', closeNavBar);
}

function openNavBar() {
    document.querySelector('#container_navbar').classList.toggle('active');
}

function closeNavBar() {
    document.querySelector('#container_navbar').classList.toggle('active');
}

// function updateNavbar() {
//     if(window.innerWidth > 900){
//         document.querySelector('.container-navbar').removeAttribute('style');
//     }
// }
// window.addEventListener('resize', updateNavbar);

