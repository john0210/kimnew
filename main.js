document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.querySelector('.navbar_burger');
    const navbarBurgerBack = document.querySelector('.navbar_burger_back');
    const navbarMenu = document.querySelector('.navbar_menu');
    const navbarOverlay = document.querySelector('.navbar_overlay');
  
    function closeMenu() {
      navbarMenu?.classList.remove('active');
      navbarOverlay?.classList.remove('active');
    }
  
    navbarBurger?.addEventListener('click', () => {
      navbarMenu?.classList.toggle('active');
      navbarOverlay?.classList.toggle('active');
    });
  
    navbarBurgerBack?.addEventListener('click', closeMenu);
    navbarOverlay?.addEventListener('click', closeMenu);
  });