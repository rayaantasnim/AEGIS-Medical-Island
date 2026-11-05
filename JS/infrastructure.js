        document.addEventListener('DOMContentLoaded', function() {
            gsap.registerPlugin(ScrollTrigger);

            // Animate island cards on scroll with silky smooth easing
            const cards = document.querySelectorAll('.island-section-card, .imageless-highlight-box');
            cards.forEach((card) => {
                gsap.fromTo(card, 
                    { opacity: 0, y: 60, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });
        });