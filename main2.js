document.addEventListener("DOMContentLoaded", function() {
    var darkBackground = document.querySelector(".dark-background");
    var navbar = document.querySelector(".navbar_main");
    var navbarMenu = document.querySelector('.navbar_menu');
    var body = document.body;

    function handleNavbarScroll() {
        // 메뉴 열려 있으면 스크롤 처리 안함
        if (navbarMenu.classList.contains('active')) return;

        if (!darkBackground || !navbar) return;

        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY;

        var darkBackgroundHeight = darkBackground.offsetHeight;
        var darkBackgroundTop = darkBackground.offsetTop;

        var triggerPosition = darkBackgroundTop + (darkBackgroundHeight * 0.9);

        if (scrollPosition >= triggerPosition) {
            navbar.classList.add("navbar_scroll");
        } else {
            navbar.classList.remove("navbar_scroll");
        }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    window.addEventListener("resize", handleNavbarScroll);

    // 초기 한번 실행
    handleNavbarScroll();
});