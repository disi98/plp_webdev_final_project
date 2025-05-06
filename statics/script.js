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
  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          cardObserver.unobserve(entry.target); // Animate once
        }
      });
    },
    {
      threshold: 0.1
    }
  );
  
  document.querySelectorAll('.card').forEach(card => {
    cardObserver.observe(card);
  });
  
  // Animate skill progress bars when in view
const skillObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector('.skill-fill');
          const targetWidth = fill.getAttribute('data-width');
          fill.style.width = targetWidth;
          skillObserver.unobserve(entry.target); // Animate once
        }
      });
    },
    {
      threshold: 0.1
    }
  );
  
  document.querySelectorAll('.skill').forEach(skill => {
    skillObserver.observe(skill);
  });
  

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    // For demonstration, we'll just log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
  
    // You can add your form submission logic here
    // For example, sending the data to your server or an email service
  
    // Reset the form after submission
    this.reset();
  });
  

  

// Observe resume blocks
const resumeObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        resumeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.resume-block').forEach(block => {
  resumeObserver.observe(block);
});


const toReveal = document.querySelectorAll('.hidden');
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

toReveal.forEach(el => revealObserver.observe(el));


