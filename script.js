// Typing animation
const text = "Building AI Research Assistants and Intelligent Applications";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 45);
    }
}
typing();

// Scroll fade-in using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));

// Show hero immediately on load
document.querySelector('.hero').classList.add('show');

// Certificate slideshow navigation
const slides = document.querySelectorAll('.cert-slide');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 0;

function updateSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.toggle('show-slide', idx === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
});

updateSlide(currentSlide);