(() => {
  const cards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!cards.length || !lightbox || !lightboxImage || !lightboxCaption || !lightboxClose) return;

  const openLightbox = (image, title, category) => {
    lightboxImage.src = image;
    lightboxImage.alt = title;
    lightboxCaption.textContent = `${title} â€” ${category}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.image, card.dataset.title, card.dataset.category);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
})();
