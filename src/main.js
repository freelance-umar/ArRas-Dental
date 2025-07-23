document.addEventListener('DOMContentLoaded', () => {
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
