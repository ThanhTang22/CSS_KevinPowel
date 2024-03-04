const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
// const navLogo = document.querySelector('.nav-logo');

navToggle.addEventListener("click", function(){
    nav.classList.toggle("nav--visible");
    // navLogo.classList.toggle("nav--hidden");
})