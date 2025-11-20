document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carousel => {
        const content = carousel.querySelector('.carousel-content');
        const leftBtn = carousel.querySelector('.carousel-nav-left');
        const rightBtn = carousel.querySelector('.carousel-nav-right');

        if (!content || !leftBtn || !rightBtn) return;

        const scrollAmount = 224; 

        leftBtn.addEventListener('click', () => {
            content.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        rightBtn.addEventListener('click', () => {
            content.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        function updateButtonVisibility() {
            const isAtStart = content.scrollLeft <= 0;
            const isAtEnd = content.scrollLeft >= (content.scrollWidth - content.clientWidth - 1);

            leftBtn.style.opacity = isAtStart ? '0' : '1';
            leftBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';

            rightBtn.style.opacity = isAtEnd ? '0' : '1';
            rightBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        }

        content.addEventListener('scroll', updateButtonVisibility);

        updateButtonVisibility();

        window.addEventListener('resize', updateButtonVisibility);

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
            const walk = (x - startX) * 2; 
            content.scrollLeft = scrollLeft - walk;
        });

        content.style.cursor = 'grab';
    });
});
