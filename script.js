// Typing animation
const text = "Learning Agentic AI";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").textContent += text.charAt(i);
        i++;
        setTimeout(typing, 45);
    }
}
typing();

// Scroll fade-in using IntersectionObserver
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade').forEach(el => observer.observe(el));
} else {
    document.querySelectorAll('.fade').forEach(el => el.classList.add('show'));
}

// Show hero immediately on load
document.querySelector('.hero').classList.add('show');

// Reading progress, active section navigation, and back-to-top control
const progressBar = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');
const sectionLinks = document.querySelectorAll('.nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id], body > section[id], .sec-alt section[id]');

function updateScrollControls() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    progressBar.style.width = `${Math.min(progress, 1) * 100}%`;
    backToTop.classList.toggle('visible', window.scrollY > 500);
}

window.addEventListener('scroll', updateScrollControls, { passive: true });
window.addEventListener('resize', updateScrollControls);
updateScrollControls();

if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sectionLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.setAttribute('aria-current', 'location');
                    } else {
                        link.removeAttribute('aria-current');
                    }
                });
            }
        });
    }, { rootMargin: '-35% 0px -55% 0px' });

    sections.forEach(section => sectionObserver.observe(section));
}

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
    stopSlideShow();
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
certSlider.addEventListener('focusin', stopSlideShow);
certSlider.addEventListener('focusout', startSlideShow);

if (slides.length > 0) {
    updateSlide(currentSlide);
    startSlideShow();
}