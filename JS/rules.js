        document.addEventListener('DOMContentLoaded', function() {
            // 1. Single Expansion Accordion Logic
            const ruleCards = document.querySelectorAll('.rule-card');

            ruleCards.forEach(card => {
                const header = card.querySelector('.rule-header');
                header.addEventListener('click', () => {
                    const isActive = card.classList.contains('active');

                    // Close all other opened accordions (Strict Single-Expansion)
                    ruleCards.forEach(item => {
                        item.classList.remove('active');
                    });

                    // Toggle clicked card
                    if (!isActive) {
                        card.classList.add('active');
                    }
                });
            });

            // 2. Intersection Observer for Sequential Green Shock Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        // Apply Green Shock animation sequentially
                        setTimeout(() => {
                            entry.target.classList.add('shock-appear');
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe all 50 rule cards
            ruleCards.forEach(card => {
                revealObserver.observe(card);
            });
        });
