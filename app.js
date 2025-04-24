// app.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // Optional: remove to keep the section visible after appearing
      }
    });
  });
  
  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
  