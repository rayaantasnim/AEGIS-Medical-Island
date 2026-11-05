  document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('navToggler');
    const menu = document.getElementById('navMenu');

    if (toggler && menu) {
      toggler.addEventListener('click', (e) => {
        e.stopPropagation();
        toggler.classList.toggle('active');
        menu.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggler.contains(e.target)) {
          toggler.classList.remove('active');
          menu.classList.remove('open');
        }
      });
    }
  });


document.addEventListener('DOMContentLoaded', () => {
  // fetch এর মাধ্যমে navbar.html ফাইলটি লোড করা
  fetch('navbar.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Navbar component load failed.');
      }
      return response.text();
    })
    .then(data => {
      // DOM ম্যানিপুলেশনের মাধ্যমে প্লেসহোল্ডারে কোড বসানো
      const placeholder = document.getElementById('navbar-placeholder');
      if (placeholder) {
        placeholder.innerHTML = data;
        
        // ন্যাভবার রেন্ডার হওয়ার পর ইভেন্ট হ্যান্ডলার ইনিশিয়ালাইজ করা
        initNavbarInteractions();
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
});

function initNavbarInteractions() {
  const toggler = document.getElementById('navToggler');
  const menu = document.getElementById('navMenu');

  if (toggler && menu) {
    // টগলার ক্লিক ইভেন্ট
    toggler.addEventListener('click', (e) => {
      e.stopPropagation();
      toggler.classList.toggle('active');
      menu.classList.toggle('open');
    });

    // ডকুমেন্টের যেকোনো জায়গায় (বাইরে) ক্লিক করলে মেনু বন্ধ হওয়া
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !toggler.contains(e.target)) {
        toggler.classList.remove('active');
        menu.classList.remove('open');
      }
    });

    // ESC কি প্রেস করলে মেনু বন্ধ হওয়া
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggler.classList.remove('active');
        menu.classList.remove('open');
      }
    });
  }
}