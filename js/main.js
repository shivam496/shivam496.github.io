/**
 * Shivam Singh Portfolio - Main JavaScript
 * Handles animations, interactions, and dynamic effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initCursorGlow();
    initNavigation();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initCounterAnimation();
    initDynamicYear();
});

/**
 * Set current year in footer
 */
function initDynamicYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * Cursor Glow Effect
 * Creates a subtle glow that follows the cursor
 */
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    
    if (!cursorGlow || window.matchMedia('(hover: none)').matches) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animate() {
        // Smooth follow effect
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        
        document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

/**
 * Navigation Effects
 * Handles scroll-based styling and active states
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link:not(.nav-link--cta)');
    
    // Scroll effect for navigation background
    function handleScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        let currentSection = '';
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttled scroll handler
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check
    handleScroll();
}

/**
 * Mobile Menu
 * Toggle functionality for mobile navigation
 */
function initMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (!navToggle || !mobileMenu) return;
    
    let isOpen = false;
    
    function toggleMenu() {
        isOpen = !isOpen;
        navToggle.classList.toggle('active', isOpen);
        mobileMenu.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    navToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (isOpen) {
                toggleMenu();
            }
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            toggleMenu();
        }
    });
}

/**
 * Scroll Reveal Animation
 * Reveals elements as they enter the viewport
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach((el) => {
        observer.observe(el);
    });
}

/**
 * Smooth Scroll
 * Handles anchor link smooth scrolling
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Counter Animation
 * Animates numbers in the hero stats section
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (!counters.length) return;
    
    const observerOptions = {
        root: null,
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'), 10);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach((counter) => {
        observer.observe(counter);
    });
}

/**
 * Animate a single counter from 0 to target
 */
function animateCounter(element, target) {
    const duration = 1500;
    const startTime = performance.now();
    const startValue = 0;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Typing Effect (optional - can be enabled for hero title)
 */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Parallax Effect (optional - for background elements)
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach((element) => {
            const speed = parseFloat(element.getAttribute('data-parallax')) || 0.5;
            const offset = scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    });
}

/**
 * Project Card Tilt Effect (optional)
 */
function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card');
    
    if (!cards.length || window.matchMedia('(hover: none)').matches) return;
    
    cards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/**
 * Console Easter Egg
 */
console.log(
    '%c👋 Hey there, curious developer!',
    'font-size: 20px; font-weight: bold; color: #d4a574;'
);
console.log(
    '%cLooking for something? Feel free to explore the code.\nLet\'s connect: https://github.com/shivam496',
    'font-size: 14px; color: #a1a1aa;'
);

