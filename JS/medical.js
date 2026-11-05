        document.addEventListener("DOMContentLoaded", function () {
            gsap.registerPlugin(ScrollTrigger);

            // Animate each instrument section on scroll
            gsap.utils.toArray('.instrument-section').forEach((section, i) => {
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
