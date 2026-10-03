(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    }));
  }
  document.querySelectorAll('[data-faq-button]').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      const answer = item.querySelector('.faq-answer');
      if (answer) answer.hidden = !isOpen;
    });
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.querySelector('[data-contact-form]');
  const note = document.querySelector('[data-form-note]');
  if (form && note) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const email = form.getAttribute('data-email') || 'hello@mostwanted.agency';
      const subject = `Most Wanted enquiry — ${data.get('name') || 'New prospect'}`;
      const body = `Name: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\nWebsite: ${data.get('website')}\nPrimary goal: ${data.get('goal')}\n\n${data.get('message')}`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      note.hidden = false;
    });
  }
})();
