/**
 * Echo Noir - Ticker JavaScript
 * Handles the social proof ticker animation
 */

function initTicker() {
    const tickerWrapper = document.querySelector('.ticker-wrapper');
    const tickerContent = document.querySelector('.ticker-content');
    
    if (!tickerWrapper || !tickerContent) return;
    
    // Create a duplicate of the content for seamless looping
    // We'll animate it with CSS/GSAP without adding it to the DOM
    
    // Calculate the animation duration based on content width
    const contentWidth = tickerContent.offsetWidth;
    const duration = contentWidth / 60; // slower speed for longer text
    
    // Only initialize animations if the user doesn't prefer reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Set up GSAP animation if GSAP is available
        if (typeof gsap !== 'undefined') {
            gsap.to('.ticker-content', {
                x: -contentWidth,
                repeat: -1, 
                repeatDelay: 0.5,
                duration: duration,
                ease: 'linear'
            });
            
            // Pause on hover
            tickerWrapper.addEventListener('mouseenter', function() {
                gsap.to('.ticker-content', { duration: 0.3, ease: 'power1.out', opacity: 0.8 });
            });
            
            tickerWrapper.addEventListener('mouseleave', function() {
                gsap.to('.ticker-content', { duration: 0.3, ease: 'power1.out', opacity: 1 });
            });
            
            // Adjust animation on window resize
            window.addEventListener('resize', function() {
                const newContentWidth = tickerContent.offsetWidth;
                const newDuration = newContentWidth / 60; // match the slower speed
                
                gsap.killTweensOf('.ticker-content');
                gsap.set('.ticker-content', { x: 0 });
                gsap.to('.ticker-content', {
                    x: -newContentWidth,
                    repeat: -1,
                    repeatDelay: 1,
                    duration: newDuration,
                    ease: 'linear'
                });
            });
        } else {
            // Fallback to CSS animation if GSAP is not available
            tickerContent.style.animationDuration = duration + 's';
        }
    }
}
