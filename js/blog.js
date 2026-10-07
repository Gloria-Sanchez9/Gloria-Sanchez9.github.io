// =========================================
//  Blog
//  Para agregar una entrada nueva, copia uno de los objetos de "posts"
//  y cambia sus datos. La más reciente va hasta arriba.
//  - date: formato "AAAA-MM-DD"
//  - es / en: título, etiqueta, resumen y contenido en cada idioma
//  - content: cada elemento del arreglo es un párrafo
// =========================================
import { getLang } from "./i18n.js";

const posts = [
  {
    id: "unity-webgl-astro",
    date: "2026-10-05",
    es: {
      tag: "Desarrollo Web",
      title: "Cómo integré juegos de Unity en una página web",
      excerpt:
        "Lo que aprendí al publicar juegos de Unity WebGL dentro del sitio de ELOA Dev Team.",
      content: [
        "En ELOA Dev Team me tocó integrar juegos hechos en Unity dentro de nuestra página web. La idea era que cualquier persona pudiera jugar directamente desde el navegador, sin descargar nada.",
        "Exporté los juegos con la plataforma WebGL de Unity y los coloqué en la carpeta pública del sitio para mostrarlos dentro de un iframe. En el camino me encontré con varios detalles de configuración que tuve que ir resolviendo.",
        "Lo más valioso fue entender cómo se conecta el desarrollo de videojuegos con el desarrollo web, y que leer la documentación con calma ahorra muchas horas.",
      ],
    },
    en: {
      tag: "Web Development",
      title: "How I embedded Unity games in a website",
      excerpt:
        "What I learned while publishing Unity WebGL games on the ELOA Dev Team website.",
      content: [
        "At ELOA Dev Team I was in charge of embedding games made in Unity into our website. The goal was for anyone to play straight from the browser, without downloading anything.",
        "I exported the games using Unity's WebGL platform and placed them in the site's public folder to display them inside an iframe. Along the way I ran into several configuration details I had to solve.",
        "The most valuable part was understanding how game development connects with web development, and that reading the documentation calmly saves many hours.",
      ],
    },
  },
  {
    id: "nasa-space-apps",
    date: "2026-09-17",
    es: {
      tag: "Hackatón",
      title: "Mi primer hackatón: NASA Space Apps",
      excerpt:
        "Participar por primera vez en el NASA Space Apps Challenge con mi equipo de amigos.",
      content: [
        "Este año participé por primera vez en el NASA Space Apps Challenge junto con un equipo de amigos.",
        "Un hackatón es una gran forma de aprender: hay que organizarse rápido, repartir tareas y construir algo funcional en muy poco tiempo.",
        "Aquí iré contando cómo nos fue, qué reto elegimos y qué aprendimos en el proceso.",
      ],
    },
    en: {
      tag: "Hackathon",
      title: "My first hackathon: NASA Space Apps",
      excerpt:
        "Taking part in the NASA Space Apps Challenge for the first time with my team of friends.",
      content: [
        "This year I took part in the NASA Space Apps Challenge for the first time, together with a team of friends.",
        "A hackathon is a great way to learn: you have to organize quickly, split tasks and build something that works in very little time.",
        "Here I'll share how it went, which challenge we chose and what we learned along the way.",
      ],
    },
  },
  {
    id: "game-jam-novela-visual",
    date: "2026-09-28",
    es: {
      tag: "Videojuegos",
      title: "Haciendo una novela visual en un game jam",
      excerpt:
        "Mi experiencia trabajando en el capítulo final de una novela visual grupal hecha en Unity.",
      content: [
        "En un game jam participé en una novela visual grupal hecha en Unity, donde cada integrante se encargó de un capítulo. A mí me tocó el capítulo final.",
        "Para darle más vida a las escenas hice un prototipo de cámara con efecto parallax y Ken Burns, que mueve y acerca lentamente las imágenes.",
        "Trabajar en un proyecto compartido me enseñó lo importante que es mantener el mismo estilo y comunicarse constantemente con el resto del equipo.",
      ],
    },
    en: {
      tag: "Games",
      title: "Making a visual novel in a game jam",
      excerpt:
        "My experience working on the final chapter of a group visual novel made in Unity.",
      content: [
        "In a game jam I took part in a group visual novel made in Unity, where each member was in charge of one chapter. I got the final chapter.",
        "To bring the scenes to life I built a camera prototype with a parallax and Ken Burns effect, which slowly pans and zooms the images.",
        "Working on a shared project taught me how important it is to keep a consistent style and to communicate constantly with the rest of the team.",
      ],
    },
  },
];

const ui = {
  es: { readMore: "Leer más", close: "Cerrar", empty: "Pronto habrá nuevas entradas." },
  en: { readMore: "Read more", close: "Close", empty: "New posts coming soon." },
};

const formatDate = (iso, lang) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const blog = () => {
  const grid = document.querySelector("#blog-grid");
  const modal = document.querySelector("#blog-modal");
  if (!grid || !modal) return;

  const modalTag = modal.querySelector(".blog-modal-tag");
  const modalDate = modal.querySelector(".blog-modal-date");
  const modalTitle = modal.querySelector(".blog-modal-title");
  const modalBody = modal.querySelector(".blog-modal-body");
  const closeBtn = modal.querySelector(".blog-modal-close");
  let openId = null;
  let lastFocus = null;

  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  const fillModal = (post) => {
    const lang = getLang();
    const p = post[lang];
    modalTag.textContent = p.tag;
    modalDate.textContent = formatDate(post.date, lang);
    modalDate.setAttribute("datetime", post.date);
    modalTitle.textContent = p.title;
    modalBody.replaceChildren(...p.content.map((par) => el("p", "", par)));
    closeBtn.setAttribute("aria-label", ui[lang].close);
  };

  const openPost = (post) => {
    lastFocus = document.activeElement;
    openId = post.id;
    fillModal(post);
    modal.hidden = false;
    document.body.classList.add("blog-modal-open");
    closeBtn.focus();
  };

  const closePost = () => {
    modal.hidden = true;
    openId = null;
    document.body.classList.remove("blog-modal-open");
    if (lastFocus) lastFocus.focus();
  };

  const render = () => {
    const lang = getLang();
    if (!sorted.length) {
      grid.replaceChildren(el("p", "blog-empty", ui[lang].empty));
      return;
    }
    grid.replaceChildren(
      ...sorted.map((post) => {
        const p = post[lang];
        const card = el("article", "blog-card");

        const meta = el("div", "blog-card-meta");
        meta.append(el("span", "blog-tag", p.tag));
        const time = el("time", "blog-date", formatDate(post.date, lang));
        time.setAttribute("datetime", post.date);
        meta.append(time);

        const btn = el("button", "blog-read", ui[lang].readMore);
        btn.type = "button";
        btn.append(el("span", "blog-read-arrow", " →"));
        btn.addEventListener("click", () => openPost(post));

        card.append(meta, el("h3", "blog-card-title", p.title), el("p", "blog-card-excerpt", p.excerpt), btn);
        return card;
      })
    );
    if (openId) fillModal(posts.find((x) => x.id === openId));
  };

  closeBtn.addEventListener("click", closePost);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closePost();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closePost();
  });
  document.addEventListener("langchange", render);

  render();
};

export default blog;
