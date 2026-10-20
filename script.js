document.addEventListener('DOMContentLoaded', () => {
  // 1. Controle do menu mobile responsivo
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Fecha o menu automaticamente ao tocar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 2. Validação e feedback estático do formulário de contato
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validação simples de preenchimento
      if (!name || !email || !message) {
        formStatus.textContent = 'Por favor, preencha todos os campos do formulário.';
        formStatus.className = 'form-status error';
        return;
      }

      // Validação de formato de e-mail básico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.textContent = 'Por favor, informe um endereço de e-mail válido.';
        formStatus.className = 'form-status error';
        return;
      }

      // Simulação de envio com sucesso
      formStatus.textContent = 'Mensagem registrada com sucesso! Obrigado pelo contato.';
      formStatus.className = 'form-status success';
      contactForm.reset();

      // Limpa a mensagem após 5 segundos
      setTimeout(() => {
        formStatus.textContent = '';
        formStatus.className = 'form-status';
      }, 5000);
    });
  }
});
