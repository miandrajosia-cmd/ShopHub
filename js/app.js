/*
 * ============================================
 *  APPLICATION PRINCIPALE
 *  Ce fichier lit la configuration et genere le site
 * ============================================
 */

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderServices();
  renderContact();
  renderFooter();
  initScrollEffects();
  initNavToggle();
  initContactForm();
  initScrollAnimations();
});

/* --- Appliquer le theme depuis la config --- */
function applyTheme() {
  const t = CONFIG.theme;
  const root = document.documentElement;
  root.style.setProperty('--primary', t.primaryColor);
  root.style.setProperty('--primary-dark', t.primaryDark);
  root.style.setProperty('--accent', t.accentColor);
  root.style.setProperty('--text-dark', t.textDark);
  root.style.setProperty('--text-light', t.textLight);
  root.style.setProperty('--bg-light', t.bgLight);
  root.style.setProperty('--bg-white', t.bgWhite);
}

/* --- Navigation --- */
function renderNav() {
  const logo = document.getElementById('nav-logo');
  const navLinks = document.getElementById('nav-links');

  logo.textContent = CONFIG.nav.logo;

  navLinks.innerHTML = CONFIG.nav.links.map(link =>
    `<li><a href="${link.href}">${link.label}</a></li>`
  ).join('');
}

/* --- Hero Section --- */
function renderHero() {
  document.getElementById('hero-name').textContent =
    CONFIG.personal.firstName + ' ' + CONFIG.personal.lastName;
  document.getElementById('hero-title').textContent = CONFIG.personal.title;
  document.getElementById('hero-subtitle').textContent = CONFIG.personal.subtitle;

  const heroImg = document.getElementById('hero-image');
  heroImg.src = CONFIG.personal.profileImage;
  heroImg.alt = 'Photo de ' + CONFIG.personal.firstName;

  const socialContainer = document.getElementById('hero-social');
  socialContainer.innerHTML = buildSocialLinks();
}

/* --- About Section --- */
function renderAbout() {
  document.getElementById('about-title').textContent = CONFIG.about.title;
  document.getElementById('about-description').textContent = CONFIG.about.description;

  const highlightsContainer = document.getElementById('about-highlights');
  highlightsContainer.innerHTML = CONFIG.about.highlights.map(h => `
    <div class="highlight-card fade-in">
      <i class="${h.icon}"></i>
      <h4>${h.label}</h4>
      <p>${h.value}</p>
    </div>
  `).join('');
}

/* --- Skills Section --- */
function renderSkills() {
  document.getElementById('skills-title').textContent = CONFIG.skills.title;

  const grid = document.getElementById('skills-grid');
  grid.innerHTML = CONFIG.skills.categories.map(cat => `
    <div class="skill-category fade-in">
      <div class="skill-category-header">
        <i class="${cat.icon}"></i>
        <h3>${cat.name}</h3>
      </div>
      ${cat.items.map(skill => `
        <div class="skill-item">
          <div class="skill-info">
            <span>${skill.name}</span>
            <span>${skill.level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-bar-fill" data-level="${skill.level}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/* --- Projects Section --- */
function renderProjects() {
  document.getElementById('projects-title').textContent = CONFIG.projects.title;

  const grid = document.getElementById('projects-grid');
  grid.innerHTML = CONFIG.projects.items.map(project => `
    <div class="project-card fade-in">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}"
             onerror="this.src='https://placehold.co/600x400/e2e8f0/64748b/png?text=Image'">
        <div class="project-overlay">
          ${project.liveUrl && project.liveUrl !== '#' ?
            `<a href="${project.liveUrl}" target="_blank" title="Voir le site"><i class="fas fa-external-link-alt"></i></a>` : ''}
          ${project.githubUrl && project.githubUrl !== '#' ?
            `<a href="${project.githubUrl}" target="_blank" title="Voir le code"><i class="fab fa-github"></i></a>` : ''}
        </div>
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* --- Services Section --- */
function renderServices() {
  document.getElementById('services-title').textContent = CONFIG.services.title;

  const grid = document.getElementById('services-grid');
  grid.innerHTML = CONFIG.services.items.map(service => `
    <div class="service-card fade-in">
      <i class="${service.icon}"></i>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    </div>
  `).join('');
}

/* --- Contact Section --- */
function renderContact() {
  document.getElementById('contact-title').textContent = CONFIG.contact.title;
  document.getElementById('contact-subtitle').textContent = CONFIG.contact.subtitle;

  const info = document.getElementById('contact-info');
  const contactItems = [
    { icon: 'fas fa-envelope', label: 'Email', value: CONFIG.personal.email },
    { icon: 'fas fa-phone', label: 'Telephone', value: CONFIG.personal.phone },
    { icon: 'fas fa-map-marker-alt', label: 'Localisation', value: CONFIG.personal.location },
  ];

  info.innerHTML = contactItems.map(item => `
    <div class="contact-info-item">
      <i class="${item.icon}"></i>
      <div>
        <h4>${item.label}</h4>
        <p>${item.value}</p>
      </div>
    </div>
  `).join('');
}

/* --- Footer --- */
function renderFooter() {
  document.getElementById('footer-social').innerHTML = buildSocialLinks();
  const year = new Date().getFullYear();
  document.getElementById('footer-text').textContent = `© ${year} ${CONFIG.footer.text}`;
}

/* --- Social Links Helper --- */
function buildSocialLinks() {
  const icons = {
    github: 'fab fa-github',
    linkedin: 'fab fa-linkedin-in',
    twitter: 'fab fa-twitter',
    instagram: 'fab fa-instagram',
    facebook: 'fab fa-facebook-f',
  };

  return Object.entries(CONFIG.social)
    .filter(([, url]) => url && url.length > 0)
    .map(([platform, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" title="${platform}">
        <i class="${icons[platform] || 'fas fa-link'}"></i>
      </a>
    `).join('');
}

/* --- Scroll Effects (navbar, back-to-top, active link) --- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('#nav-links a');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar shadow
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = '#' + section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  });

  // Back to top click
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* --- Mobile Nav Toggle --- */
function initNavToggle() {
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      const icon = toggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    });
  });
}

/* --- Contact Form --- */
function initContactForm() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Construct mailto link as fallback
    const mailtoLink = `mailto:${CONFIG.personal.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    )}`;

    window.location.href = mailtoLink;

    // Show success feedback
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Message Prepare!';
    btn.style.background = '#10b981';
    btn.style.borderColor = '#10b981';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.borderColor = '';
      form.reset();
    }, 3000);
  });
}

/* --- Scroll Animations (Intersection Observer) --- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Animate skill bars when visible
        const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
        skillBars.forEach(bar => {
          const level = bar.getAttribute('data-level');
          bar.style.width = level + '%';
        });
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Also observe skill categories for bar animations
  document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
}
