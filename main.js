document.addEventListener('DOMContentLoaded', () => {
    const navbarBurger = document.querySelector('.navbar_burger');
    const navbarBurgerBack = document.querySelector('.navbar_burger_back');
    const navbarMenu = document.querySelector('.navbar_menu');
    const navbarOverlay = document.querySelector('.navbar_overlay');
  

    function closeMenu() {
      navbarBurger?.classList.remove('active');
      navbarMenu?.classList.remove('active');
      navbarOverlay?.classList.remove('active');
    }
  
    navbarBurger?.addEventListener('click', () => {
      navbarBurger?.classList.toggle('active');
      navbarMenu?.classList.toggle('active');
      navbarOverlay?.classList.toggle('active');
    });
  
    navbarBurgerBack?.addEventListener('click', closeMenu);
    navbarOverlay?.addEventListener('click', closeMenu);
  });