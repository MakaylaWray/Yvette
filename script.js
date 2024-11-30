function redirectToProvider(){
    window.location.href = "support.html";
}

function redirectToResources(){
    window.location.href = "resources.html";
}

function redirectToAbout(){
    window.location.href = "about.html";
}

const hamMenu = document.querySelector('.ham-menu');
const bodyScroll =document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    bodyScroll.classList.toggle('active');

})