document.addEventListener('DOMContentLoaded', () => {
    // Hamburger click event
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Menu item click event
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const subMenu = this.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.classList.toggle('visible');
            }
        });
    });
});
