function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formResponse').textContent = "Thanks for reaching out! We'll get back to you soon.";
  this.reset();
});

const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('navLinks');

// Check if elements exist before adding listeners
if (toggle && nav) {
  // Toggle menu on click
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  // Toggle menu on Enter key press (accessibility)
  toggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      nav.classList.toggle('show');
    }
  });
}
