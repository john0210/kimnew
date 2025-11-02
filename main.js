document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.querySelector('.navbar_burger');
    const navbarBurgerBack = document.querySelector('.navbar_burger_back');
    const navbarMenu = document.querySelector('.navbar_menu');
    const navbarOverlay = document.querySelector('.navbar_overlay');
    const body = document.body;

    let scrollPosition = 0;

    function openMenu() {
        // 현재 스크롤 위치 저장
        scrollPosition = window.scrollY;

        // body 고정
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.left = '0';
        body.style.right = '0';
        body.style.width = '100%';
        body.style.overflow = 'hidden';  // touchAction보다 안정적

        navbarMenu.classList.add('active');
        navbarOverlay.classList.add('active');
    }

    function closeMenu() {
        // body 스타일 원복
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        body.style.width = '';
        body.style.overflow = '';

        // 원래 스크롤 위치 복원
        window.scrollTo(0, scrollPosition);

        navbarMenu.classList.remove('active');
        navbarOverlay.classList.remove('active');
    }

    navbarBurger.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navbarBurgerBack.addEventListener('click', closeMenu);
    navbarOverlay.addEventListener('click', closeMenu);
});
