const currentYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
