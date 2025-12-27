// Constants
const SENSOR_UPDATE_INTERVAL = 100; // ms
const PARTICLE_COUNT_DESKTOP = 40;
const PARTICLE_COUNT_MOBILE = 20;
const LOADING_DELAY = 1500; // ms

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function () {
  try {
    // Loading screen
    const loading = document.getElementById('loading');
    if (loading) {
      setTimeout(() => {
        loading.classList.add('hidden');
      }, LOADING_DELAY);
    }

    // Theme toggle
    initThemeToggle();

    // Mobile menu toggle
    initMobileMenu();

    // Navigation
    initNavigation();

    // Chatbot
    initChatbot();

    // Contact form
    initContactForm();

    // Scroll animations
    initScrollAnimations();

    // Update active nav link on scroll
    initActiveNavOnScroll();

  } catch (error) {
    console.error('Error initializing portfolio:', error);
  }
});

// Theme Toggle
function initThemeToggle() {
  try {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      const icon = themeToggle.querySelector('i');

      body.setAttribute('data-theme', newTheme);
      if (icon) {
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
      }

      localStorage.setItem('theme', newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon && savedTheme === 'light') {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  } catch (error) {
    console.error('Error initializing theme toggle:', error);
  }
}

// Mobile Menu
function initMobileMenu() {
  try {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
      // Update ARIA attribute
      const isExpanded = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });
  } catch (error) {
    console.error('Error initializing mobile menu:', error);
  }
}

// Navigation
function initNavigation() {
  try {
    const navLinksElements = document.querySelectorAll('.nav-link');
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');

    navLinksElements.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });

          // Update active nav link
          navLinksElements.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          // Close mobile menu
          if (navLinks && menuToggle) {
            navLinks.classList.remove('active');
            const menuIcon = menuToggle.querySelector('i');
            if (menuIcon) {
              menuIcon.classList.add('fa-bars');
              menuIcon.classList.remove('fa-times');
            }
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  } catch (error) {
    console.error('Error initializing navigation:', error);
  }
}





// Chatbot functionality
function initChatbot() {
  try {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');

    if (!chatbot || !chatbotToggle || !chatbotClose || !chatbotMessages || !chatbotInput || !chatbotSend) return;

    chatbotToggle.addEventListener('click', () => {
      chatbot.classList.add('active');
      chatbotToggle.setAttribute('aria-expanded', 'true');
      chatbotInput.focus();
    });

    chatbotClose.addEventListener('click', () => {
      chatbot.classList.remove('active');
      chatbotToggle.setAttribute('aria-expanded', 'false');
    });

    // Chatbot responses
    const responses = {
      'hello': 'Bonjour ! Je suis l\'assistant de Fedi. Comment puis-je vous aider ?',
      'bonjour': 'Bonjour ! Je suis l\'assistant de Fedi. Comment puis-je vous aider ?',
      'salut': 'Salut ! Que souhaitez-vous savoir sur Fedi Haddad ?',
      'compétences': 'Fedi est expert en IoT, systèmes embarqués (Arduino, ESP32, STM32), IA (Deep Learning, CNN, TensorFlow) et robotique (ROS). Il maîtrise aussi Python, C++ et le développement Full-Stack.',
      'compétence': 'Fedi est expert en IoT, systèmes embarqués (Arduino, ESP32, STM32), IA (Deep Learning, CNN, TensorFlow) et robotique (ROS). Il maîtrise aussi Python, C++ et le développement Full-Stack.',
      'projets': 'Ses projets marquants incluent : une IA de détection de maladies des plantes (TensorFlow/CNN), un robot éducatif multilingue chez DigiGrowing, et un système de gestion d\'accès RFID chez QuetraTech.',
      'projet': 'Ses projets marquants incluent : une IA de détection de maladies des plantes (TensorFlow/CNN), un robot éducatif multilingue chez DigiGrowing, et un système de gestion d\'accès RFID chez QuetraTech.',
      'expérience': 'Fedi a 3 ans d\'expérience. Ses stages récents (été 2025) incluent DigiGrowing (Robotique & IA) et QuetraTech (IoT & Full-Stack).',
      'formation': 'Fedi est en dernière année de Licence IoT et Systèmes Embarqués à l\'ISIMA (2025-2026). Il possède un Bac Informatique obtenu en 2023.',
      'email': 'Vous pouvez contacter Fedi par email à fedihaddad76@gmail.com.',
      'téléphone': 'Le numéro de téléphone de Fedi est le 58666779.',
      'phone': 'Le numéro de téléphone de Fedi est le 58666779.',
      'contact': 'Vous pouvez contacter Fedi par email (fedihaddad76@gmail.com) ou par téléphone (58666779).',
      'iot': 'Fedi est un spécialiste IoT, ayant développé des systèmes de gestion d\'accès industriels et des solutions pour pépinières d\'entreprises.',
      'ai': 'En IA, Fedi a conçu un modèle Deep Learning (CNN) avec TensorFlow pour le diagnostic phyto-sanitaire des plantes.',
      'intelligence artificielle': 'En IA, Fedi a conçu un modèle Deep Learning (CNN) avec TensorFlow pour le diagnostic phyto-sanitaire des plantes.',
      'robotique': 'Fedi a conçu un robot éducatif interactif chez DigiGrowing capable de parler Arabe, Français et Anglais.',
      'certifications': 'Fedi possède des certifications NVIDIA (Deep Learning, Multi-GPU), AWS IoT Core, et Hashgraph Developer (Hedera Hashgraph).',
      'certification': 'Fedi possède des certifications NVIDIA (Deep Learning, Multi-GPU), AWS IoT Core, et Hashgraph Developer (Hedera Hashgraph).',
      'hashgraph': 'Fedi est certifié Hashgraph Developer par The Hashgraph Association (ID: f73bc0a5-deb5-47fe-831e-7e2b8ec68713).',
      'hedera': 'Fedi est certifié Hashgraph Developer par The Hashgraph Association (ID: f73bc0a5-deb5-47fe-831e-7e2b8ec68713).',
      'enactus': 'Fedi est membre actif d\'Enactus (2024-2025), travaillant sur des projets à fort impact social.',
      'pnl': 'Il est bénévole et animateur pour l\'Association PNL, où il anime des ateliers de robotique dans les lycées de Mahdia.',
      'default': 'Désolé, je n\'ai pas compris. Posez-moi une question sur mes compétences, mes projets (IA, IoT, Robotique), mon parcours à l\'ISIMA ou mes coordonnées.'
    };

    function sendMessage() {
      const message = chatbotInput.value.trim();
      if (!message) return;

      // Sanitize input (basic)
      const sanitizedMessage = message.replace(/<[^>]*>/g, '');

      // Add user message
      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = sanitizedMessage;
      chatbotMessages.appendChild(userMessage);

      // Clear input
      chatbotInput.value = '';

      // Find response
      const messageLower = sanitizedMessage.toLowerCase();
      let response = responses.default;
      for (const keyword in responses) {
        if (messageLower.includes(keyword)) {
          response = responses[keyword];
          break;
        }
      }

      // Add bot response after delay
      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = response;
        chatbotMessages.appendChild(botMessage);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      }, 1000);

      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Close chatbot when clicking outside
    document.addEventListener('click', (e) => {
      if (chatbot && chatbotToggle && !chatbot.contains(e.target) && e.target !== chatbotToggle) {
        chatbot.classList.remove('active');
        chatbotToggle.setAttribute('aria-expanded', 'false');
      }
    });
  } catch (error) {
    console.error('Error initializing chatbot:', error);
  }
}

// Contact form handling with Formspree AJAX
function initContactForm() {
  try {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        alert('Veuillez remplir les champs obligatoires.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          submitBtn.innerHTML = '<i class="fas fa-check"></i> Envoyé !';
          contactForm.reset();
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 3000);
        } else {
          throw new Error('Formspree error');
        }
      } catch (error) {
        console.error('Submission error:', error);
        submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Erreur';
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
        alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      }
    });
  } catch (error) {
    console.error('Error initializing contact form:', error);
  }
}

// Scroll animations
function initScrollAnimations() {
  try {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
          entry.target.classList.add('animate-on-scroll');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card, .section-header, .hero-left, .hero-right > div').forEach(el => {
      observer.observe(el);
    });
  } catch (error) {
    console.error('Error initializing scroll animations:', error);
  }
}

// Update active nav link on scroll
function initActiveNavOnScroll() {
  try {
    let ticking = false;

    function updateActiveNavOnScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll('section[id]');
          const scrollPos = window.scrollY + 100;

          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
              document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
              });
              if (navLink) {
                navLink.classList.add('active');
              }
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', updateActiveNavOnScroll);
  } catch (error) {
    console.error('Error initializing active nav on scroll:', error);
  }
}
