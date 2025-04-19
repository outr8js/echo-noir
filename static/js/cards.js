/**
 * Echo Noir - Cards JavaScript
 * Handles flip card animations and interactions
 */

function initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    if (!flipCards.length) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Set up cards for mobile touch interaction
    flipCards.forEach(card => {
        const cardInner = card.querySelector('.flip-card-inner');
        
        if (prefersReducedMotion) {
            // For users who prefer reduced motion, show both sides side by side instead of flipping
            setupReducedMotionCards(card);
        } else {
            // For desktop hover
            // (Default CSS hover behavior will work)
            
            // For mobile touch
            card.addEventListener('touchstart', function(e) {
                e.preventDefault();
                cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' 
                    ? 'rotateY(0deg)' 
                    : 'rotateY(180deg)';
            });
            
            // Reset card when touched outside
            document.addEventListener('touchstart', function(e) {
                if (!card.contains(e.target)) {
                    cardInner.style.transform = 'rotateY(0deg)';
                }
            });
        }
    });
    
    // If on features page, animate cards with staggered effect
    const featuresGrid = document.querySelector('.features-grid-section');
    if (featuresGrid && !prefersReducedMotion) {
        animateCardsOnScroll(flipCards);
    }
}

function setupReducedMotionCards(card) {
    // Get content from front and back of card
    const frontContent = card.querySelector('.flip-card-front').innerHTML;
    const backContent = card.querySelector('.flip-card-back').innerHTML;
    
    // Create alternative layout for reduced motion preference
    card.classList.add('reduced-motion-card');
    card.innerHTML = `
        <div class="reduced-motion-card-content">
            <div class="reduced-motion-front">
                ${frontContent}
            </div>
            <div class="reduced-motion-back">
                ${backContent}
            </div>
        </div>
    `;
    
    // Add some basic styles for the alternative layout
    card.style.height = 'auto';
    const content = card.querySelector('.reduced-motion-card-content');
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.gap = '1rem';
    
    const front = card.querySelector('.reduced-motion-front');
    front.style.backgroundColor = 'var(--dark-gray)';
    front.style.padding = '1.5rem';
    front.style.borderRadius = 'var(--radius-md)';
    
    const back = card.querySelector('.reduced-motion-back');
    back.style.backgroundColor = 'var(--accent-orange)';
    back.style.padding = '1.5rem';
    back.style.borderRadius = 'var(--radius-md)';
    back.style.color = 'var(--white)';
}

function animateCardsOnScroll(cards) {
    if (!window.IntersectionObserver) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Animate the card with a staggered delay
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}
