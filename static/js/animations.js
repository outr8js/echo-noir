/**
 * Echo Noir - Animations JavaScript
 * Handles GSAP animations for enhanced visual effects
 */

document.addEventListener('DOMContentLoaded', function() {
    // Only initialize animations if the user doesn't prefer reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        initGSAPAnimations();
    }
});

function initGSAPAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        gsap.from('.hero-title', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-subtitle', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-section .cta-btn', {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-logo', {
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
            delay: 0.2,
            ease: 'back.out(1.7)'
        });
    }
    
    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // Step cards animation
    const stepCards = document.querySelectorAll('.step-card');
    if (stepCards.length) {
        gsap.from(stepCards, {
            scrollTrigger: {
                trigger: '.steps-row',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    
    // CTA section animation
    const ctaSections = document.querySelectorAll('.cta-section');
    ctaSections.forEach(section => {
        gsap.from(section.querySelector('h2'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        gsap.from(section.querySelector('.cta-btn'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });
    });
    
    // Footer animation
    const footer = document.querySelector('footer');
    if (footer) {
        gsap.from('footer .footer-brand', {
            scrollTrigger: {
                trigger: footer,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        gsap.from('footer .footer-links, footer .social-icons', {
            scrollTrigger: {
                trigger: footer,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });
    }
    
    // Animate features page elements
    const featuresGridSection = document.querySelector('.features-grid-section');
    if (featuresGridSection) {
        const featureCards = featuresGridSection.querySelectorAll('.flip-card');
        
        gsap.from(featureCards, {
            scrollTrigger: {
                trigger: featuresGridSection,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            onComplete: () => {
                featureCards.forEach(card => card.classList.add('animated'));
            }
        });
    }
    
    // Animate pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card');
    if (pricingCards.length) {
        gsap.from(pricingCards, {
            scrollTrigger: {
                trigger: '.pricing-plans-section',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            stagger: 0.3,
            duration: 1,
            ease: 'power3.out'
        });
    }
    
    // Animate FAQ accordion
    const faqItems = document.querySelectorAll('.accordion-item');
    if (faqItems.length) {
        gsap.from(faqItems, {
            scrollTrigger: {
                trigger: '.faq-section',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    
    // Animate about page elements
    const aboutHero = document.querySelector('.about-hero');
    if (aboutHero) {
        gsap.from('.about-hero h1, .about-hero .lead', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.mission-content h2, .mission-content p, .mission-content blockquote', {
            scrollTrigger: {
                trigger: '.mission-section',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
        
        const valueCards = document.querySelectorAll('.value-card');
        gsap.from(valueCards, {
            scrollTrigger: {
                trigger: '.values-section',
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
    }
    
    // Animate geometric shapes
    const shapes = document.querySelectorAll('.shape');
    if (shapes.length) {
        shapes.forEach(shape => {
            gsap.to(shape, {
                x: 'random(-20, 20)',
                y: 'random(-20, 20)',
                rotation: 'random(-10, 10)',
                duration: 'random(10, 20)',
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });
        });
    }
    
    // Animate contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const formElements = contactForm.querySelectorAll('.form-floating, button');
        
        gsap.from(formElements, {
            scrollTrigger: {
                trigger: contactForm,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power3.out'
        });
    }
    
    // Animate 404 page
    const errorSection = document.querySelector('.error-section');
    if (errorSection) {
        gsap.from('.error-section h1, .error-section h2, .error-section p, .error-section .cta-btn', {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
    }
}
