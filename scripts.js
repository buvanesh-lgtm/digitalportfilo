const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent actual submission / page reload

  successMessage.style.display = 'block';  // Show success message
  form.reset();                            // Reset form fields

  // Hide success message after 4 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 4000);
});
