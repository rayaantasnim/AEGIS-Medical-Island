        document.addEventListener("DOMContentLoaded", function () {
            gsap.registerPlugin(ScrollTrigger);

            // Animate architecture overview card
            gsap.to('.architecture-overview-card', {
                scrollTrigger: {
                    trigger: '.architecture-overview-card',
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            // Animate each control section on scroll
            gsap.utils.toArray('.control-section').forEach((section) => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.75,
                    ease: "power3.out"
                });
            });
        });
