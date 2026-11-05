        document.addEventListener('DOMContentLoaded', function() {
            gsap.registerPlugin(ScrollTrigger);

            gsap.fromTo('.gateway-card', 
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.gateway-card',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            gsap.fromTo('.feature-section-box', 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.feature-section-box',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            gsap.fromTo('.gallery-item', 
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.residence-gallery-grid',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
