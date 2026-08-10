// Typing animation
const text = "Learning Agentic AI";
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
const certSlider = document.querySelector('.cert-slider');
let currentSlide = 0;
let slideInterval;

function updateSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.toggle('show-slide', idx === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide(currentSlide);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5500);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopSlideShow();
    startSlideShow();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopSlideShow();
    startSlideShow();
});

certSlider.addEventListener('mouseenter', stopSlideShow);
certSlider.addEventListener('mouseleave', startSlideShow);

updateSlide(currentSlide);
startSlideShow();