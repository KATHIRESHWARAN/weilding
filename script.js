
// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .service-card, .contact-form');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Header scroll effect
    const headerScroll = () => {
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.padding = '1rem 5%';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '1.5rem 5%';
                header.style.boxShadow = 'none';
            }
        });
    };
    
    // Smooth scroll for anchor links
    const smoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    };
    
    // Initialize all functions
    animateOnScroll();
    headerScroll();
    smoothScroll();
})
