// Carousel functionality for Spotify Clone

document.addEventListener('DOMContentLoaded', function () {
    // Get all carousel containers
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const content = carousel.querySelector('.carousel-content');
        const leftBtn = carousel.querySelector('.carousel-nav-left');
        const rightBtn = carousel.querySelector('.carousel-nav-right');

        if (!content || !leftBtn || !rightBtn) return;

        // Scroll amount (width of one card + gap)
        const scrollAmount = 224; // 200px card + 24px gap

        // Left button click
        leftBtn.addEventListener('click', () => {
            content.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        // Right button click
        rightBtn.addEventListener('click', () => {
            content.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Update button visibility based on scroll position
        function updateButtonVisibility() {
            const isAtStart = content.scrollLeft <= 0;
            const isAtEnd = content.scrollLeft >= (content.scrollWidth - content.clientWidth - 1);

            leftBtn.style.opacity = isAtStart ? '0' : '1';
            leftBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';

            rightBtn.style.opacity = isAtEnd ? '0' : '1';
            rightBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        }

        // Listen for scroll events
        content.addEventListener('scroll', updateButtonVisibility);

        // Initial check
        updateButtonVisibility();

        // Check on window resize
        window.addEventListener('resize', updateButtonVisibility);

        // Mouse drag scrolling (optional enhancement)
        let isDown = false;
        let startX;
        let scrollLeft;

        content.addEventListener('mousedown', (e) => {
            isDown = true;
            content.style.cursor = 'grabbing';
            startX = e.pageX - content.offsetLeft;
            scrollLeft = content.scrollLeft;
        });

        content.addEventListener('mouseleave', () => {
            isDown = false;
            content.style.cursor = 'grab';
        });

        content.addEventListener('mouseup', () => {
            isDown = false;
            content.style.cursor = 'grab';
        });

        content.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - content.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            content.scrollLeft = scrollLeft - walk;
        });

        // Set cursor style
        content.style.cursor = 'grab';
    });
});
