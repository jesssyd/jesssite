document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.custom-toggler');
    const changePosition = 500;

    function updateNavbarBackground() {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        if (window.scrollY >= changePosition || isExpanded) {
            navbar.style.backgroundColor = 'var(--tan-bg)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);
    navbarToggler.addEventListener('click', function () {
        setTimeout(updateNavbarBackground, 0); 
    });
});