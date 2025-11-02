document.addEventListener("DOMContentLoaded", function () {
    const navbarBurger = document.querySelector(".navbar_burger");
    const navbarBurgerBack = document.querySelector(".navbar_burger_back");
    const navbarMenu = document.querySelector(".navbar_menu");
    const navbarOverlay = document.querySelector(".navbar_overlay");
    const navbar = document.querySelector(".navbar_main");
    const darkBackground = document.querySelector(".dark-background");
    const topButton = document.getElementById("topButton");
    const body = document.body;

    let scrollPosition = 0;

    // ===== 모바일 메뉴 열기/닫기 =====
    function openMenu() {
        scrollPosition = window.scrollY;

        // 모바일 화면일 때만 body 고정
        if (window.innerWidth <= 1350) {
            body.style.position = "fixed";
            body.style.top = `-${scrollPosition}px`;
            body.style.left = "0";
            body.style.right = "0";
            body.style.width = "100%";
            body.style.overflow = "hidden";
        }

        navbarMenu.classList.add("active");
        navbarOverlay.classList.add("active");
        navbarBurgerBack.classList.add("active");
    }

    function closeMenu() {
        // 모바일 화면일 때만 body 스타일 원복
        if (window.innerWidth <= 1350) {
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.width = "";
            body.style.overflow = "";
            window.scrollTo(0, scrollPosition);
        }

        navbarMenu.classList.remove("active");
        navbarOverlay.classList.remove("active");
        navbarBurgerBack.classList.remove("active");
    }

    navbarBurger?.addEventListener("click", () => {
        if (navbarMenu.classList.contains("active")) closeMenu();
        else openMenu();
    });

    navbarBurgerBack?.addEventListener("click", closeMenu);
    navbarOverlay?.addEventListener("click", closeMenu);

    // ===== 스크롤 네비게이션 =====
    function handleNavbarScroll() {
        if (!darkBackground || !navbar) return;

        // 모바일 메뉴 열림 시 무시
        if (window.innerWidth <= 1350 && navbarMenu.classList.contains("active")) return;

        const scrollPos = window.scrollY;
        const trigger = darkBackground.offsetTop + darkBackground.offsetHeight * 0.9;

        if (scrollPos >= trigger) navbar.classList.add("navbar_scroll");
        else navbar.classList.remove("navbar_scroll");
    }

    window.addEventListener("scroll", handleNavbarScroll);
    window.addEventListener("resize", handleNavbarScroll);
    handleNavbarScroll();

    // ===== Top 버튼 =====
    topButton?.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ===== 모든 링크 클릭 시 처리 =====
    const menuLinks = document.querySelectorAll(".navbar_menu a, .navbar_main .navbar_links a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 1350 && navbarMenu.classList.contains("active")) {
                closeMenu();
            }
            // PC 화면에서는 그냥 이동
        });
    });
});

