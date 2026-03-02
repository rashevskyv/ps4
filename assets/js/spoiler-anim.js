/*
 * Smooth Spoiler Animation
 * Handles smooth expansion and collapse of <details> elements with class "spoiler"
 */

document.addEventListener('DOMContentLoaded', function () {
    const spoilers = document.querySelectorAll('details.spoiler');

    spoilers.forEach(function (spoiler) {
        const summary = spoiler.querySelector('summary');
        const content = spoiler.querySelector('.spoiler-content');
        // Find the footer that is a direct child of this spoiler
        const footer = Array.from(spoiler.children).find(child => child.classList.contains('spoiler-close-footer'));

        // Helper to calculate full height including content and footer
        function getFullHeight() {
            let height = summary.offsetHeight;
            if (content) height += content.offsetHeight;
            if (footer) height += footer.offsetHeight;
            return height;
        }

        // Click handler for summary
        summary.addEventListener('click', function (e) {
            e.preventDefault();
            if (spoiler.hasAttribute('open')) {
                closeSpoiler(spoiler);
            } else {
                openSpoiler(spoiler);
            }
        });

        // Click handler for footer close button
        if (footer) {
            footer.addEventListener('click', function (e) {
                e.preventDefault();
                closeSpoiler(spoiler);
            });
        }
    });

    function openSpoiler(el) {
        // Store the current position relative to the viewport
        const rect = el.getBoundingClientRect();
        el.dataset.openPosition = rect.top;

        // Set starting height
        el.style.height = el.offsetHeight + 'px';
        el.open = true; // Add open attribute to render content

        // Wait for next frame to allow content to render and calculate height
        window.requestAnimationFrame(function () {
            const startHeight = el.offsetHeight;
            el.style.height = 'auto'; // Let it expand to find natural height
            const endHeight = el.offsetHeight;

            // Reset to start height to begin animation
            el.style.height = startHeight + 'px';

            // Force reflow
            void el.offsetHeight;

            // Enable transition
            el.style.transition = 'height 0.3s ease-out';
            el.style.height = endHeight + 'px';

            // Cleanup after transition
            el.addEventListener('transitionend', function transitionEnd() {
                el.style.height = 'auto';
                el.style.transition = '';
                el.removeEventListener('transitionend', transitionEnd);
            });
        });
    }

    function closeSpoiler(el) {
        const startHeight = el.offsetHeight;
        const endHeight = el.querySelector('summary').offsetHeight;

        el.style.height = startHeight + 'px';
        el.style.overflow = 'hidden'; // Ensure content is clipped

        // Force reflow
        void el.offsetHeight;

        el.style.transition = 'height 0.3s ease-out';
        el.style.height = endHeight + 'px';

        // Restore position relative to viewport immediately
        if (el.dataset.openPosition) {
            const targetViewportTop = parseFloat(el.dataset.openPosition);
            const currentRect = el.getBoundingClientRect();
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Calculate where we need to scroll to
            const absoluteTop = currentRect.top + currentScrollTop;
            const targetScrollTop = absoluteTop - targetViewportTop;

            window.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });

            // Clean up
            delete el.dataset.openPosition;
        }

        el.addEventListener('transitionend', function transitionEnd() {
            el.open = false;
            el.style.height = '';
            el.style.transition = '';
            el.style.overflow = ''; // Reset overflow
            el.removeEventListener('transitionend', transitionEnd);
        });
    }

    // --- Logic for opening spoilers via hash links ---
    function checkHashAndOpen(explicitHash) {
        const hash = explicitHash || window.location.hash;
        if (!hash) return;

        try {
            const id = decodeURIComponent(hash.substring(1));
            const target = document.getElementById(id);
            if (!target) return;

            const parentSpoiler = target.closest('details.spoiler');
            if (parentSpoiler && !parentSpoiler.open) {
                openSpoiler(parentSpoiler);
                // After opening, we might need a small delay to scroll accurately
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 400);
            }
        } catch (e) {
            console.warn("Invalid hash target:", hash, e);
        }
    }

    // Initial check
    setTimeout(() => checkHashAndOpen(), 500);

    // Listen for hash changes
    window.addEventListener('hashchange', () => checkHashAndOpen());

    // Also intercept clicks on links pointing to hashes on the current page
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (link && link.hash && (link.pathname === window.location.pathname || link.pathname === window.location.pathname + '/')) {
            // Pass the hash directly because window.location.hash might not be updated yet
            checkHashAndOpen(link.hash);
        }
    });
});
