const yearElement = document.getElementById('year');
const lastModifiedElement = document.getElementById('last-modified');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

yearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = document.lastModified;

hamburgerBtn.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    hamburgerBtn.innerHTML = navMenu.style.display === 'block' ? 'X' : '';
});
