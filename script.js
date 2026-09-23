document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.menu-toggle-open');
  const closeBtn = document.querySelector('.menu-toggle-close');
  const navMenu = document.getElementById('mobile-nav');

  // Verify elements exist before adding listeners to prevent console errors
  if (openBtn && closeBtn && navMenu) {
    
    // Clicking the hamburger adds the open class (slides it in)
    openBtn.addEventListener('click', () => {
      navMenu.classList.add('open');
    });

    // Clicking the X removes the open class (slides it out)
    closeBtn.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  }
});
