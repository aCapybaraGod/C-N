document.addEventListener('DOMContentLoaded', () => {
  // Google Form URL for all bracelets
  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfaPygXwrGUlQxLEfmEH4FJIf50Z69JdOibsbEt6bV57QpfDw/viewform?usp=preview';

  // Attach click handler to all "Buy Now" buttons (secondary buttons)
  document.querySelectorAll('.button-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(formUrl, '_blank', 'noopener');
    });
  });
});
