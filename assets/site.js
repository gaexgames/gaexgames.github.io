(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileNav = document.querySelector('[data-mobile-nav]');
  const modal = document.querySelector('[data-profile-modal]');
  const openProfile = document.querySelectorAll('[data-open-profile]');
  const closeProfile = document.querySelectorAll('[data-close-profile]');
  let previousFocus = null;

  const closeMenu = () => {
    if (!menuButton || !mobileNav) return;
    mobileNav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  };

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', event => {
      if (!mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  const showProfile = () => {
    if (!modal) return;
    previousFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    const closeButton = modal.querySelector('[data-close-profile]');
    closeButton?.focus();
  };

  const hideProfile = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    previousFocus?.focus?.();
  };

  openProfile.forEach(button => button.addEventListener('click', showProfile));
  closeProfile.forEach(button => button.addEventListener('click', hideProfile));
  modal?.addEventListener('click', event => {
    if (event.target === modal) hideProfile();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      if (modal?.classList.contains('is-open')) hideProfile();
    }
  });

  document.querySelectorAll('[data-current-year]').forEach(node => {
    node.textContent = String(new Date().getFullYear());
  });
})();
