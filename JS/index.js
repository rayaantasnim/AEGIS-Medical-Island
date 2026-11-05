      document.addEventListener("DOMContentLoaded", function () {
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        };

        const shockObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll(".shock-reveal").forEach((section) => {
          shockObserver.observe(section);
        });
      });