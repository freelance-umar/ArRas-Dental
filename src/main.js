document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.navbar__menu');
  const mobileMenu = document.querySelector('.mobile__menu');
  const closeMenu = document.querySelector('.mobile__menu__back');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

  const scrollContainer = document.querySelector('.about__inner__body__gallery');
  const scrollLeftBtn = document.querySelector('.scroll-left');
  const scrollRightBtn = document.querySelector('.scroll-right');

  const scrollAmount = 400;

  scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});
