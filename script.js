// Typing animation
const text = "Aspiring Data Analyst | Python Developer";
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