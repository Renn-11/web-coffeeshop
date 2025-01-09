const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector('.navbar .navbar-nav');
const toggleButton = document.querySelector('.icon-menu a#menu-toggle');
const searchButton = document.querySelector('#search');
const searchForm = document.querySelector('.search-form');

document.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const toggleActive = (element, e) => {
    e.preventDefault();
    element.classList.toggle('active');
};

toggleButton.addEventListener('click', (e) => toggleActive(navbarNav, e));
searchButton.addEventListener('click', (e) => toggleActive(searchForm, e));

document.addEventListener('click', (e) => {
    if (!toggleButton.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});