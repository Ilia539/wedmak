var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
        
      },
       // Responsive breakpoints
  breakpoints: {
    540: {
      slidesPerView: 2,
      
    }
  }
});
// ...........Здесь прописали функции для открытия меню при нажатии на кнопку
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
  
})