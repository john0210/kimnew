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

    // ===== 모바일 메뉴 열기 =====
    function openMenu() {
        scrollPosition = window.scrollY;

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
    

         // 🔴 추가: 햄버거 버튼 숨기기 (겹침 방지)
        navbarBurger.style.visibility = "hidden"; // 공간 유지
    }

    // ===== 모바일 메뉴 닫기 =====
    function closeMenu() {
        if (window.innerWidth <= 1350) {
            body.style.position = "";
            body.style.top = "";
            body.style.left = "";
            body.style.right = "";
            body.style.width = "";
            body.style.overflow = "";

            // 스크롤 위치 복원
            window.scrollTo(0, scrollPosition);
        }

        navbarMenu.classList.remove("active");
        navbarOverlay.classList.remove("active");
        navbarBurgerBack.classList.remove("active");

         // 🔵 추가: 메뉴 닫을 때 햄버거 버튼 다시 보이기
        navbarBurger.style.visibility = "visible";
    }

    // ===== 햄버거 버튼 클릭 시 열기/닫기 =====
    navbarBurger?.addEventListener("click", () => {
        if (navbarMenu.classList.contains("active")) closeMenu();
        else openMenu();
    });

    // 닫기 버튼 및 오버레이 클릭 시 닫기
    navbarBurgerBack?.addEventListener("click", closeMenu);
    navbarOverlay?.addEventListener("click", closeMenu);

    // ===== 스크롤 시 네비게이션 스타일 변경 =====
    function handleNavbarScroll() {
        if (!darkBackground || !navbar) return;

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
        if (window.innerWidth <= 1350 && navbarMenu.classList.contains("active")) {
            closeMenu();
            requestAnimationFrame(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });

    // ===== 메뉴 내 링크 클릭 시 닫기 =====
    const menuLinks = document.querySelectorAll(".navbar_menu a, .navbar_main .navbar_links a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (window.innerWidth <= 1350 && navbarMenu.classList.contains("active")) {
                closeMenu();
            }
        });
    });
});


