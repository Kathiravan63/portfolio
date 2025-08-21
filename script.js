// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') document.documentElement.classList.add('light');
themeToggle?.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form (client-only demo)
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  // Naive client-side validation
  if (!payload.name || !payload.email || !payload.message) {
    formStatus.textContent = 'Please fill out all fields.';
    return;
  }

  // Demo: pretend to send (since no backend). You can wire this to a service like Formspree later.
  formStatus.textContent = 'Sending...';
  setTimeout(() => {
    formStatus.textContent = 'Thanks! Your message has been queued.';
    form.reset();
  }, 700);
});
