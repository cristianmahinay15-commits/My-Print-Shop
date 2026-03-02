const form = document.getElementById('printRequestForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  message.textContent = "Your request has been submitted! We will contact you soon.";
  message.style.color = "green";
  form.reset();
});