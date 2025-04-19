/**
 * Echo Noir - Benefits Cards JavaScript
 * Handles unique animations for the benefits cards
 */

// Initialize GSAP animations for benefits cards
function initBenefitCards() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not found, benefit card animations disabled');
        return;
    }

    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Get all benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    if (benefitCards.length === 0) {
        return;
    }
    
    // Create stagger animation for cards
    gsap.fromTo(
        benefitCards, 
        { 
            y: 100, 
            opacity: 0,
            rotationX: 15,
            scale: 0.9
        }, 
        { 
            y: 0, 
            opacity: 1,
            rotationX: 0, 
            scale: 1,
            duration: 0.8, 
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.benefits-grid',
                start: 'top 80%',
                once: true
            }
        }
    );
    
    // Add hover animations
    benefitCards.forEach(card => {
        const icon = card.querySelector('.benefit-icon');
        const content = card.querySelector('.benefit-content');
        const title = card.querySelector('.benefit-title');
        
        // Create timeline for each card
        const tl = gsap.timeline({ paused: true });
        
        tl.to(icon, { 
            rotationY: 360, 
            scale: 1.1,
            boxShadow: '0 8px 25px rgba(255, 78, 46, 0.4)',
            duration: 0.5, 
            ease: "back.out(1.5)" 
        }, 0);
        
        tl.to(title, { 
            scale: 1.05, 
            color: '#fff',
            duration: 0.4, 
            ease: "power1.out" 
        }, 0.1);
        
        tl.to(content, { 
            y: -5, 
            opacity: 1,
            duration: 0.5, 
            ease: "power1.out" 
        }, 0.2);
        
        tl.to(card, {
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 78, 46, 0.1)',
            y: -15,
            duration: 0.6,
            ease: "power2.out"
        }, 0);
        
        // Mouse enter/leave events
        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
        
        // Add parallax effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width - 0.5) * 10;
            const yPercent = (y / rect.height - 0.5) * 10;
            
            gsap.to(card.querySelector('.benefit-card-inner'), {
                rotationY: xPercent,
                rotationX: -yPercent,
                transformPerspective: 1000,
                duration: 0.5,
                ease: "power1.out"
            });
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('.benefit-card-inner'), {
                rotationY: 0,
                rotationX: 0,
                duration: 0.5,
                ease: "power1.out"
            });
        });
    });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    initBenefitCards();
});