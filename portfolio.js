(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document
    .querySelectorAll('.category-card, .discipline-section, .contact-section, .gallery-preview-section')
    .forEach((item) => observer.observe(item));

  const params = new URLSearchParams(window.location.search);
  const formStatus = document.getElementById('formStatus');

  if (formStatus) {
    const status = params.get('contact');
    if (status === 'success') {
      formStatus.textContent = 'Thank you. Your project enquiry has been sent successfully.';
      formStatus.classList.add('form-status--success');
    } else if (status === 'error') {
      formStatus.textContent = 'Sorry, your enquiry could not be sent right now. Please try again or email us directly.';
      formStatus.classList.add('form-status--error');
    }
  }
})();
