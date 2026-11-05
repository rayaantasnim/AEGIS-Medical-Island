        document.addEventListener('DOMContentLoaded', function() {
            const attireCards = document.querySelectorAll('.attire-card');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('shock-appear');
                        }, 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            attireCards.forEach(card => {
                revealObserver.observe(card);
            });
        });
