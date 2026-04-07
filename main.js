// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter Animation Logic
const counters = document.querySelectorAll('.count');
const speed = 200; // The lower the slower

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Lower inc means smoother animation
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + (target === 8 || target === 2000 || target === 650 ? "+" : "");
            }
        };
        updateCount();
    });
};

// Start counter animation on page load
window.addEventListener('DOMContentLoaded', () => {
    animateCounters();
});

// Navbar scroll styles
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 5%';
        nav.style.boxShadow = 'var(--shadow-lg)';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.padding = '20px 5%';
        nav.style.boxShadow = 'none';
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});

console.log("BismiNikah (madhnikah.in) initialized with trust indicators and animations.");
