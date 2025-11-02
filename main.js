document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.querySelector('.navbar_burger');
    const navbarBurgerBack = document.querySelector('.navbar_burger_back');
    const navbarMenu = document.querySelector('.navbar_menu');
    const navbarOverlay = document.querySelector('.navbar_overlay');
    const body = document.body;

    let scrollPosition = 0;

    function openMenu() {
        scrollPosition = window.scrollY;

        // 모바일 터치 스크롤 방지
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
        body.style.touchAction = 'none';

        navbarMenu.classList.add('active');
        navbarOverlay.classList.add('active');

        // iOS에서 추가 방지
        document.addEventListener('touchmove', preventTouchMove, { passive: false });
    }

    function closeMenu() {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.touchAction = '';
        window.scrollTo(0, scrollPosition);

        navbarMenu.classList.remove('active');
        navbarOverlay.classList.remove('active');

        document.removeEventListener('touchmove', preventTouchMove);
    }

    function preventTouchMove(e) {
        e.preventDefault(); // 터치 이동 막기
    }

    navbarBurger.addEventListener('click', () => {
        if(navbarMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navbarBurgerBack.addEventListener('click', closeMenu);
    navbarOverlay.addEventListener('click', closeMenu);
});