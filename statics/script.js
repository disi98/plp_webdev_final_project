// Add 'scrolled' class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Toggle navigation menu on small screens
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });
  
  // Animate portfolio cards when in view
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Animate once
        }
      });
    },
    {
      threshold: 0.1
    }
  );
  
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
  