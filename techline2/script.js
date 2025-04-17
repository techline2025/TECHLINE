function contactWhatsApp() {
    const phoneNumber = '558801680357301';
    const defaultMessage = 'Olá TechLine, gostaria de saber mais sobre seus serviços!';
    const encodedMessage = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  
  // Animações ao carregar a página
  document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.hero-card, .banner, .service-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
  });