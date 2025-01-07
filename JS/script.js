const navbarNav = document.querySelector('.navbar .navbar-nav');
const toggleButton = document.querySelector('.icon-menu a#menu-toggle');

toggleButton.addEventListener('click', (e) => {
    e.preventDefault();// mencegah halaman memuat ulang.
    navbarNav.classList.toggle('active');
});

//klik diluar sidebar untuk menghilangkan nav

document.addEventListener('click', function (e) {
    if (!toggleButton.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

