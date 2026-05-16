(() => {
  'use strict';

  // Mobile navigation toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    const setOpen = (open) => {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // Appointment form
  const form = document.getElementById('appointment-form');
  const note = document.getElementById('form-note');

  if (form && note) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.className = 'form-note';

      if (!form.checkValidity()) {
        note.textContent = 'Please complete the required fields above.';
        note.classList.add('err');
        form.reportValidity();
        return;
      }

      const name = (form.elements.name.value || '').trim().split(' ')[0];
      note.textContent = name
        ? `Thanks, ${name}! We'll call you shortly to confirm your appointment.`
        : "Thanks! We'll call you shortly to confirm your appointment.";
      note.classList.add('ok');
      form.reset();
    });
  }

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
