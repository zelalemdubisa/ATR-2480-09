var hamburger = document.getElementById('hamburger');
var navbar = document.getElementById('navbar');

hamburger.addEventListener('click', function() {
if (navbar.style.display === 'none') {
navbar.style.display = 'flex';
hamburger.textContent = 'X';
} else {
navbar.style.display = 'none';
hamburger.textContent = '☰';
}
});