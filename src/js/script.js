
export function bindEvents() {
    document.querySelector('#btn_navbar').addEventListener('click', openNavBar);
    document.querySelector('#close_navbar').addEventListener('click', closeNavBar);
    document.querySelector('.blur-black').addEventListener('click', closeNavBar);
}

function openNavBar() {
    document.querySelector('.container-navbar').style.display = 'flex';
}

function closeNavBar() {
    document.querySelector('.container-navbar').style.display = 'none';
}

function updateNavbar() {
    if(window.innerWidth > 900){
        document.querySelector('.container-navbar').removeAttribute('style');
    }
}
window.addEventListener('resize', updateNavbar);

