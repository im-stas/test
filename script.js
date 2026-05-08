(() => {
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('hidden', !open);
    iconOpen?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
  };
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });
  menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    const showStatus = (msg, kind) => {
      status.textContent = msg;
      status.classList.remove('is-success', 'is-error', 'hidden');
      status.classList.add(kind === 'success' ? 'is-success' : 'is-error');
    };

    const validate = () => {
      let firstInvalid = null;
      const required = form.querySelectorAll('[required]');
      required.forEach((el) => {
        const value = ('value' in el ? el.value : '').trim();
        const valid = el.checkValidity() && value.length > 0;
        el.toggleAttribute('data-error', !valid);
        if (!valid && !firstInvalid) firstInvalid = el;
      });
      return firstInvalid;
    };

    form.addEventListener('input', (e) => {
      const t = e.target;
      if (t && t.hasAttribute('data-error')) t.removeAttribute('data-error');
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const invalid = validate();
      if (invalid) {
        showStatus('Please fill out the highlighted fields so we can match you with the right trainer.', 'error');
        invalid.focus({ preventScroll: false });
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const labelDefault = submitBtn?.querySelector('[data-label-default]');
      const labelLoading = submitBtn?.querySelector('[data-label-loading]');
      submitBtn?.setAttribute('disabled', 'true');
      labelDefault?.classList.add('hidden');
      labelLoading?.classList.remove('hidden');

      // Simulated submit — wire to your backend / form service (Formspree, Resend, etc.) here.
      await new Promise((r) => setTimeout(r, 900));

      const data = Object.fromEntries(new FormData(form).entries());
      console.info('[Pinnacle K9] contact request', data);

      showStatus(
        `Thanks${data.name ? `, ${String(data.name).split(' ')[0]}` : ''}! We received your request and will reply within 2 business hours.`,
        'success',
      );
      form.reset();
      submitBtn?.removeAttribute('disabled');
      labelDefault?.classList.remove('hidden');
      labelLoading?.classList.add('hidden');
    });
  }
})();
