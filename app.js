document.addEventListener('DOMContentLoaded', () => {
  // Google Form URL for all bracelets
  const formUrl = 'https://surveyheart.com/form/6a11c6ab0f3f0bf1641ae7e8';

  // Attach click handler to all "Buy Now" buttons (secondary buttons)
  document.querySelectorAll('.button-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(formUrl, '_blank', 'noopener');
    });
  });
});
