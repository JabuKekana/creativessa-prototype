document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var navbarMenu = document.querySelector('.navbar-menu');
    var toggleMenu = false;
  
    menuIcon.addEventListener('click', function () {
      toggleMenu = !toggleMenu;
      if (toggleMenu) {
        navbarMenu.style.display = 'block';
      } else {
        navbarMenu.style.display = 'none';
      }
    });
  });
  




//   FUNCTION FOR SLIDESHOW

