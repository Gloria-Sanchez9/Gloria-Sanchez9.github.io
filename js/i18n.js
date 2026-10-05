// Traducciones del portafolio (español / inglés)
// Para agregar un texto nuevo: ponle data-i18n="clave" en el HTML
// y agrega esa clave aquí en "es" y en "en".
export const translations = {
  es: {
    "nav.logo": "Portafolio",
    "nav.home": "Inicio",
    "nav.about": "Sobre mi",
    "nav.projects": "Trabajos",
    "nav.contact": "Contacto",
    "hero.greeting": "Hola, Yo soy",
    "hero.subtitle": "Ingeniera en Sistemas (en progreso)",
    "hero.portfolioBtn": "Mi Portafolio",
    "about.descr":
      "¡Hola! Soy Gloria, estudiante de Ingeniería en Sistemas de la Información. Me encanta combinar la programación con la creatividad: desde páginas web hasta videojuegos e instalaciones interactivas para niños. Con ELOA Dev Team he desarrollado sitios web e integrado juegos de Unity para la web. Me gusta aprender participando en game jams, hackatones y proyectos de investigación sobre interacción humano-computadora.",
    "about.cv": "Descargar CV",
    "skills.english": "Dominancia del Idioma Inglés",
    "skills.french": "Frances",
    "skills.kumonLevel": "Nivel K",
    "services.teamwork.title": "Trabajo en equipo",
    "services.teamwork.text":
      "Divido los proyectos en tareas claras y priorizo para cumplir con los tiempos de entrega. Conozco metodologías ágiles como Scrum para organizar el trabajo en equipo.",
    "services.communication.title": "Comunicación",
    "services.communication.text":
      "Puedo explicar ideas técnicas de manera sencilla, tanto a mi equipo como a personas sin conocimientos de programación. Tengo experiencia presentando proyectos y exposiciones en clase.",
    "services.organization.title": "Organización",
    "services.organization.text":
      "Divido los proyectos en tareas claras y priorizo para cumplir con los tiempos de entrega. Conozco metodologías ágiles como Scrum para organizar el trabajo en equipo.",
    "projects.eloa": 'Página Web "ELOA"',
    "projects.weavy": 'Juego Interactivo "Weavy"',
    "projects.party": 'Página Web "Party Problems"',
    "projects.calc": 'Página Web "Calculadoras"',
    "projects.restaurant": "Interfaz Menú Restaurante",
    "projects.grocery": "Interfaz Sistema Abarrotes",
    "projects.cat.web": "Desarrollo Web",
    "projects.cat.games": "Desarrollo de Videojuegos",
    "projects.cat.uiux": "Diseño UI/UX",
    "projects.demo": "Ver demo",
    "projects.repo": "Ver repositorio",
    "projects.figma": "Ver Prototipo en Figma",
    "contact.email": "Correo:",
    "theme.toDark": "Cambiar a modo oscuro",
    "theme.toLight": "Cambiar a modo claro",
    "lang.switch": "View in English",
  },
  en: {
    "nav.logo": "Portfolio",
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.greeting": "Hi, I'm",
    "hero.subtitle": "Systems Engineer (in progress)",
    "hero.portfolioBtn": "My Portfolio",
    "about.descr":
      "Hi! I'm Gloria, an Information Systems Engineering student. I love combining programming with creativity: from websites to video games and interactive installations for kids. With ELOA Dev Team I've built websites and integrated Unity games for the web. I like learning by taking part in game jams, hackathons and research projects on human-computer interaction.",
    "about.cv": "Download CV",
    "skills.english": "English Proficiency",
    "skills.french": "French",
    "skills.kumonLevel": "Level K",
    "services.teamwork.title": "Teamwork",
    "services.teamwork.text":
      "I break projects down into clear tasks and prioritize to meet deadlines. I'm familiar with agile methodologies like Scrum to organize teamwork.",
    "services.communication.title": "Communication",
    "services.communication.text":
      "I can explain technical ideas in a simple way, both to my team and to people with no programming background. I have experience presenting projects and giving talks in class.",
    "services.organization.title": "Organization",
    "services.organization.text":
      "I break projects down into clear tasks and prioritize to meet deadlines. I'm familiar with agile methodologies like Scrum to organize teamwork.",
    "projects.eloa": '"ELOA" Website',
    "projects.weavy": '"Weavy" Interactive Game',
    "projects.party": '"Party Problems" Website',
    "projects.calc": '"Calculators" Website',
    "projects.restaurant": "Restaurant Menu Interface",
    "projects.grocery": "Grocery Store System Interface",
    "projects.cat.web": "Web Development",
    "projects.cat.games": "Game Development",
    "projects.cat.uiux": "UI/UX Design",
    "projects.demo": "View demo",
    "projects.repo": "View repository",
    "projects.figma": "View Figma Prototype",
    "contact.email": "Email:",
    "theme.toDark": "Switch to dark mode",
    "theme.toLight": "Switch to light mode",
    "lang.switch": "Ver en español",
  },
};

export const getLang = () => document.documentElement.getAttribute("lang") === "en" ? "en" : "es";

export const t = (key) => translations[getLang()][key] ?? key;

export const applyLang = (lang) => {
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = translations[lang][el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });
  const btn = document.querySelector("#lang-toggle");
  if (btn) {
    btn.textContent = lang === "es" ? "EN" : "ES";
    btn.setAttribute("aria-label", translations[lang]["lang.switch"]);
    btn.setAttribute("title", translations[lang]["lang.switch"]);
  }
  try { localStorage.setItem("lang", lang); } catch (e) {}
};
