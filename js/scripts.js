// welcome splash loader
const intro = document.querySelector('.welcome-loader');
const logo = document.querySelector('.welcome-text');
const logoSpan = document.querySelectorAll('.intro');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (index + 1 ) * 200);
        })

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (index + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';            
        }, 2500)
    });
});


// mobile-menu
const menuFade = () => {
    const mobileNav = document.querySelector('nav')
    const menu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.main-menu');
    const mobile = document.querySelector('.mobile-logo');
    const menuItems = document.querySelectorAll('.menu-item');
   

    menu.addEventListener('click', () => {
        nav.classList.toggle('mobile-active');
        mobile.classList.toggle('logo-active');
        mobileNav.classList.toggle('nav-active');

        // menu animation
        menu.classList.toggle('toggle');
    });
}

// calling the mobile menu
menuFade();
