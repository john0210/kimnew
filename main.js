document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.querySelector('.navbar_burger');
    const navbarBurgerBack = document.querySelector('.navbar_burger_back');
    const navbarMenu = document.querySelector('.navbar_menu');
    const navbarOverlay = document.querySelector('.navbar_overlay');

    function openMenu() {
        navbarBurger.style.display = 'none';       // 햄버거 버튼 숨김
        navbarBurgerBack.style.display = 'block';  // X 버튼 보임
        navbarMenu.classList.add('active');
        navbarOverlay.classList.add('active');
    }

    function closeMenu() {
        navbarBurger.style.display = 'block';      // 햄버거 버튼 보임
        navbarBurgerBack.style.display = 'none';   // X 버튼 숨김
        navbarMenu.classList.remove('active');
        navbarOverlay.classList.remove('active');
    }

    navbarBurger.addEventListener('click', openMenu);
    navbarBurgerBack.addEventListener('click', closeMenu);
    navbarOverlay.addEventListener('click', closeMenu);
});
