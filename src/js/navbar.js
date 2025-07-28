export function initNavbar() {
  const menuToggle = document.querySelector('.navbar__menu');
  const mobileMenu = document.querySelector('.mobile__menu');
  const closeMenu = document.querySelector('.mobile__menu__back');

  if (!menuToggle || !mobileMenu || !closeMenu) return;

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

document.querySelectorAll('.mobile__menu__content h1[data-target]').forEach(item => {
  item.addEventListener('click', () => {
    // Optional: only trigger scroll if menu is open
    if (!mobileMenu.classList.contains('open')) return;

    const targetId = item.getAttribute('data-target');
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Hide menu after navigating
    document.body.style.overflow = '';
    mobileMenu.classList.remove('open');
  });
});
}
