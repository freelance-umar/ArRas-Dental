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

  // Gallery Klinik
    const imageGalleryKlinik = [
      "image-1.jpg",
      "image-2.jpg",
      "image-3.jpg",
      "image-4.jpg",
      "image-5.jpg",
      "image-6.jpg",
      "image-7.jpg",
      "image-8.jpg",
      "image-9.jpg",
      "image-10.jpg",
      "image-11.jpg",
      "image-12.jpg",
    ]
    function createKlinikImage(src, alt = 'Klinik Image') {
      // Create the container div
      const container = document.createElement('div');
      container.classList.add('gallery__klinik__img');

      // Create the img element
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;

      // Append the image into the container
      container.appendChild(img);

      // Return the full element (so you can append it somewhere)
      return container;
    }
    const gallery = document.querySelector('.gallery__klinik__swiper');
    imageGalleryKlinik.forEach(filename => {
      const el = createKlinikImage(`/src/assets/images/optimized/gallery/${filename}`);
      gallery.appendChild(el);
    });
});
