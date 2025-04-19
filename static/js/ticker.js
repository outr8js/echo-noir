/**
 * Echo Noir - Ticker JavaScript
 * Handles the social proof ticker animation
 */

function initTicker() {
    const tickerWrapper = document.querySelector('.ticker-wrapper');
    const tickerContent = document.querySelector('.ticker-content');
    
    if (!tickerWrapper || !tickerContent) return;
    
    // Clone the ticker content to create a seamless loop
    const clone = tickerContent.cloneNode(true);
    tickerWrapper.appendChild(clone);
    
    // Calculate the animation duration based on content width
    const contentWidth = tickerContent.offsetWidth;
    const duration = contentWidth / 50; // adjust speed as needed
    
    // Only initialize animations if the user doesn't prefer reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Set up GSAP animation
        gsap.to('.ticker-content', {
            x: -contentWidth,
            repeat: -1,
            duration: duration,
            ease: 'linear'
        });
    }
    
    // Pause on hover
    tickerWrapper.addEventListener('mouseenter', function() {
        gsap.to('.ticker-content', { timeScale: 0.2 });
    });
    
    tickerWrapper.addEventListener('mouseleave', function() {
        gsap.to('.ticker-content', { timeScale: 1 });
    });
    
    // Adjust animation on window resize
    window.addEventListener('resize', function() {
        const newContentWidth = tickerContent.offsetWidth;
        const newDuration = newContentWidth / 50;
        
        gsap.killTweensOf('.ticker-content');
        gsap.set('.ticker-content', { x: 0 });
        gsap.to('.ticker-content', {
            x: -newContentWidth,
            repeat: -1,
            duration: newDuration,
            ease: 'linear'
        });
    });
}
