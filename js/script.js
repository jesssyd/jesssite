document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.custom-toggler');
    let changePosition;

    const navbarSectionId = navbar.closest('section').id;
    let backgroundColor;

    if (navbarSectionId === 'about-nav' || navbarSectionId === 'navigation') {
        backgroundColor = 'rgba(235, 227, 213, 0.8)';
        changePosition = 500;
    } else if (navbarSectionId === 'photography-nav') {
        backgroundColor = 'rgba(255, 255, 255, 0.8)';
        changePosition = 25;
    } else if (navbarSectionId === 'project-nav') {
        backgroundColor = 'rgba(84,11,14, 0.8)';
        changePosition = 25;
    }

    function updateNavbarBackground() {
        const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
        if (window.scrollY >= changePosition || isExpanded) {
            navbar.style.backgroundColor = backgroundColor;
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    }

    window.addEventListener('scroll', updateNavbarBackground);
    navbarToggler.addEventListener('click', function () {
        setTimeout(updateNavbarBackground, 0);
    });
});
