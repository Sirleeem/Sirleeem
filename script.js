// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Carousel Functionality
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-btn.next').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
});

document.querySelector('.carousel-btn.prev').addEventListener('click', () => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    document.getElementById('scroll-top').style.display = window.scrollY > 200 ? 'block' : 'none';
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Basic Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
});