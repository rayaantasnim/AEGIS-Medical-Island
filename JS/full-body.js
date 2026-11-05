        document.addEventListener("DOMContentLoaded", function () {
            gsap.registerPlugin(ScrollTrigger);

            // Animate micro-islands overview section
            gsap.to('.micro-islands-card', {
                scrollTrigger: {
                    trigger: '.micro-islands-card',
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            // Animate each diagnosis section on scroll
            gsap.utils.toArray('.diagnosis-section').forEach((section) => {
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
