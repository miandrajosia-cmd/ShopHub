/*
 * ============================================
 *  CONFIGURATION DU SITE WEB PERSONNEL
 *  Modifiez ce fichier pour personnaliser votre site
 * ============================================
 */

const CONFIG = {

  /* --- INFORMATIONS PERSONNELLES --- */
  personal: {
    firstName: "Josia",
    lastName: "Rakotovao",
    fullName: "Manda Halimanana Miandra Josia Rakotovao",
    title: "Développeur Web & Créateur Digital",
    subtitle: "Passionné par la technologie et le développement de solutions innovantes",
    email: "miandrajosia@gmail.com",
    phone: "+261 34 00 000 00",
    location: "Antananarivo, Madagascar",
    profileImage: "https://placehold.co/300x300/2563eb/ffffff/png?text=JR",
  },

  /* --- LIENS RÉSEAUX SOCIAUX --- */
  social: {
    github: "https://github.com/miandrajosia-cmd",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
  },

  /* --- COULEURS DU THÈME --- */
  theme: {
    primaryColor: "#2563eb",
    primaryDark: "#1d4ed8",
    accentColor: "#f59e0b",
    textDark: "#1e293b",
    textLight: "#64748b",
    bgLight: "#f8fafc",
    bgWhite: "#ffffff",
  },

  /* --- SECTION A PROPOS --- */
  about: {
    title: "À Propos de Moi",
    description: `Je suis un développeur web passionné basé à Antananarivo, Madagascar. 
    J'aime créer des sites web modernes, performants et accessibles. 
    Mon objectif est de transformer des idées en expériences digitales exceptionnelles.`,
    highlights: [
      { icon: "fas fa-code", label: "Développement Web", value: "Frontend & Backend" },
      { icon: "fas fa-paint-brush", label: "Design UI/UX", value: "Interfaces Modernes" },
      { icon: "fas fa-mobile-alt", label: "Responsive", value: "Tous les écrans" },
      { icon: "fas fa-rocket", label: "Performance", value: "Sites rapides" },
    ],
  },

  /* --- COMPÉTENCES --- */
  skills: {
    title: "Mes Compétences",
    categories: [
      {
        name: "Frontend",
        icon: "fas fa-laptop-code",
        items: [
          { name: "HTML5", level: 90 },
          { name: "CSS3 / Tailwind", level: 85 },
          { name: "JavaScript", level: 80 },
          { name: "React", level: 70 },
        ],
      },
      {
        name: "Backend",
        icon: "fas fa-server",
        items: [
          { name: "Node.js", level: 75 },
          { name: "Python", level: 70 },
          { name: "PHP", level: 65 },
          { name: "SQL / MySQL", level: 75 },
        ],
      },
      {
        name: "Outils",
        icon: "fas fa-tools",
        items: [
          { name: "Git / GitHub", level: 85 },
          { name: "VS Code", level: 90 },
          { name: "Figma", level: 60 },
          { name: "Docker", level: 55 },
        ],
      },
    ],
  },

  /* --- PROJETS --- */
  projects: {
    title: "Mes Projets",
    items: [
      {
        title: "ShopHub",
        description: "Plateforme e-commerce moderne avec panier et paiement intégré.",
        image: "https://placehold.co/600x400/2563eb/ffffff/png?text=ShopHub",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "https://github.com/miandrajosia-cmd/ShopHub",
      },
      {
        title: "Portfolio Personnel",
        description: "Site web personnel responsive pour présenter mes travaux.",
        image: "https://placehold.co/600x400/1d4ed8/ffffff/png?text=Portfolio",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        title: "Application de Gestion",
        description: "Application de gestion de tâches avec interface intuitive.",
        image: "https://placehold.co/600x400/f59e0b/ffffff/png?text=TaskApp",
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "#",
        githubUrl: "#",
      },
    ],
  },

  /* --- SECTION SERVICES --- */
  services: {
    title: "Mes Services",
    items: [
      {
        icon: "fas fa-globe",
        title: "Création de Sites Web",
        description: "Sites web modernes, rapides et optimisés pour le référencement.",
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Design Responsive",
        description: "Interfaces adaptées à tous les appareils: mobile, tablette, desktop.",
      },
      {
        icon: "fas fa-search",
        title: "SEO & Optimisation",
        description: "Amélioration du positionnement sur les moteurs de recherche.",
      },
      {
        icon: "fas fa-cogs",
        title: "Maintenance & Support",
        description: "Support technique continu et mises à jour régulières.",
      },
    ],
  },

  /* --- SECTION CONTACT --- */
  contact: {
    title: "Contactez-Moi",
    subtitle: "N'hésitez pas à me contacter pour discuter de votre projet !",
    formAction: "https://formspree.io/f/your-form-id", // Remplacez par votre ID Formspree
  },

  /* --- NAVIGATION --- */
  nav: {
    logo: "JR",
    links: [
      { label: "Accueil", href: "#hero" },
      { label: "À Propos", href: "#about" },
      { label: "Compétences", href: "#skills" },
      { label: "Projets", href: "#projects" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },

  /* --- PIED DE PAGE --- */
  footer: {
    text: "Manda Halimanana Miandra Josia Rakotovao. Tous droits réservés.",
  },
};
