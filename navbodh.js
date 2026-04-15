// Navbar scroll
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
  });

  // Mobile menu
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Order buttons
  function orderNow(product) {
    document.getElementById('productInput').value = product;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  // Form submit
  function submitForm() {
    alert('🌿 Thank you for your enquiry! We will contact you soon.\n\nYou can also call us directly:\n📞 077140 40459');
  }