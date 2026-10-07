// =========================================
//  Blog
//  Aquí van los proyectos que no tienen repositorio (por ejemplo, los
//  prototipos de Figma). Para agregar uno nuevo, copia uno de los objetos
//  de "posts" y cambia sus datos.
//  - date (opcional): formato "AAAA-MM-DD"; las entradas se muestran en el orden de esta lista
//  - image: imagen de portada
//  - link: enlace al prototipo (opcional)
//  - es / en: textos en cada idioma. Cada apartado es un arreglo de párrafos.
// =========================================
import { getLang } from "./i18n.js";

const posts = [
  {
    id: "sistema-abarrotes",
    image: "img/works/06.png",
    link: "https://www.figma.com/proto/LYVO0SF4tuYeSG4Yfx4W9v/Sistema-Abarrotes?node-id=0-1&t=JloAXK70Gy7NFgtz-1",
    es: {
      tag: "Diseño UI/UX",
      title: "Interfaz de Sistema para Abarrotes “El Buen Precio”",
      excerpt:
        "Prototipo en Figma de un sistema punto de venta para una tienda de abarrotes, pensado para que el cajero trabaje rápido.",
      description: [
        "“El Buen Precio” es el prototipo de un sistema punto de venta para una tienda de abarrotes. Desde una sola pantalla de inicio, el cajero puede buscar productos, registrar ventas, hacer la apertura y el corte de caja, y generar facturas.",
      ],
      requirements: [
        "La tienda necesitaba una herramienta sencilla para el día a día en la caja: iniciar sesión según el rol del usuario (por ejemplo, cajero), buscar productos y consultar sus precios, registrar una venta nueva, hacer la apertura y el corte de caja al inicio y fin del turno, y facturar.",
        "Además, la interfaz debía ser fácil de aprender para cualquier empleado y permitir trabajar rápido aunque haya fila de clientes.",
      ],
      design: [
        "Primero identifiqué las tareas más frecuentes en la caja y las organicé como botones grandes en la pantalla de inicio, cada uno con un ícono claro y una etiqueta, para que se reconozcan de un vistazo.",
        "Usé colores cálidos (amarillo y verde) con imágenes de frutas y verduras para relacionar el sistema con la tienda, y destaqué con color las acciones principales: “Buscar producto” y “Nueva venta”. En la parte superior siempre se ve el usuario con su rol y el botón para cerrar sesión.",
      ],
      implementation: [
        "El prototipo lo construí en Figma: diseñé cada pantalla con marcos (frames) y componentes reutilizables para los botones e íconos, y después las conecté en el modo Prototipo para simular la navegación del sistema.",
        "Así se puede probar el flujo completo haciendo clic, como si fuera la aplicación real, sin escribir código.",
      ],
      result: [
        "El resultado es un prototipo interactivo que muestra cómo funcionaría el sistema completo antes de programarlo. Sirve para validar el diseño con los usuarios y como guía para el desarrollo.",
      ],
    },
    en: {
      tag: "UI/UX Design",
      title: "“El Buen Precio” Grocery Store System Interface",
      excerpt:
        "Figma prototype of a point-of-sale system for a grocery store, designed so the cashier can work fast.",
      description: [
        "“El Buen Precio” is a prototype of a point-of-sale system for a grocery store. From a single home screen, the cashier can search for products, register sales, open and close the cash register, and issue invoices.",
      ],
      requirements: [
        "The store needed a simple tool for day-to-day work at the register: log in according to the user's role (for example, cashier), search products and check their prices, register a new sale, open and close the register at the start and end of each shift, and issue invoices.",
        "The interface also had to be easy for any employee to learn and let them work quickly even when there is a line of customers.",
      ],
      design: [
        "First I identified the most frequent tasks at the register and arranged them as large buttons on the home screen, each with a clear icon and label so they can be recognized at a glance.",
        "I used warm colors (yellow and green) with images of fruits and vegetables to connect the system with the store, and highlighted the main actions with color: “Search product” and “New sale”. The top bar always shows the user, their role and the log-out button.",
      ],
      implementation: [
        "I built the prototype in Figma: I designed each screen with frames and reusable components for buttons and icons, and then connected them in Prototype mode to simulate the system's navigation.",
        "This way the whole flow can be tested by clicking, as if it were the real app, without writing code.",
      ],
      result: [
        "The result is an interactive prototype that shows how the full system would work before programming it. It helps validate the design with users and serves as a guide for development.",
      ],
    },
  },
  {
    id: "menu-restaurante",
    image: "img/works/05.png",
    link: "https://www.figma.com/proto/hLBbGG0IepyrHifwiDn2h3/Restaurante?node-id=0-1&t=q6BryCgxKiq3QFhA-1",
    es: {
      tag: "Diseño UI/UX",
      title: "Interfaz de Menú Digital para Restaurante",
      excerpt:
        "Prototipo en Figma de un menú digital interactivo para un restaurante italiano, donde el cliente explora los platillos y arma su pedido.",
      description: [
        "Es el prototipo de un menú digital para un restaurante de comida italiana. El cliente puede recorrer las categorías del menú (como Aperitivos / Antipasti), ver cada platillo con su foto y precio, y agregarlo a su pedido.",
      ],
      requirements: [
        "El restaurante quería un menú atractivo y fácil de usar que mostrara cada platillo con foto, nombre y precio, organizado por categorías.",
        "También pedía que el cliente pudiera identificar rápido información importante de cada platillo (si es nuevo, si es una opción saludable, si es sugerencia del chef o cuánto tarda en prepararse), ir armando su pedido y ajustar el tamaño de la vista para leer mejor.",
      ],
      design: [
        "Elegí un estilo elegante que transmitiera la experiencia del restaurante: una fotografía de fondo de comida, tipografía caligráfica para los nombres de las categorías y tonos dorados y cafés.",
        "Cada platillo se muestra en una tarjeta con su foto, nombre, precio y una flecha para ver más detalles. Diseñé un sistema de íconos con su leyenda (producto nuevo, opción saludable, sugerencia del chef y tiempo de preparación) y agregué una canasta con contador para el pedido, además de botones de acercar y alejar.",
      ],
      implementation: [
        "Lo implementé en Figma: creé las pantallas de cada categoría y del detalle de los platillos, usé componentes para las tarjetas y los íconos para mantener un diseño consistente, y conecté todo en el modo Prototipo para que se pueda navegar haciendo clic.",
      ],
      result: [
        "El resultado es un prototipo interactivo de un menú digital que se puede recorrer como si fuera la aplicación real. Muestra cómo el diseño visual y los íconos ayudan al cliente a decidir qué pedir de forma más rápida y agradable.",
      ],
    },
    en: {
      tag: "UI/UX Design",
      title: "Digital Menu Interface for a Restaurant",
      excerpt:
        "Figma prototype of an interactive digital menu for an Italian restaurant, where customers browse dishes and build their order.",
      description: [
        "This is a prototype of a digital menu for an Italian restaurant. Customers can browse the menu categories (such as Appetizers / Antipasti), see each dish with its photo and price, and add it to their order.",
      ],
      requirements: [
        "The restaurant wanted an attractive, easy-to-use menu that showed each dish with a photo, name and price, organized by category.",
        "It also asked that customers could quickly spot key information about each dish (whether it's new, a healthy option, a chef's suggestion, or how long it takes to prepare), build their order as they go, and zoom the view in or out to read better.",
      ],
      design: [
        "I chose an elegant style that conveys the restaurant experience: a food photograph as the background, calligraphic lettering for category names, and gold and brown tones.",
        "Each dish is shown on a card with its photo, name, price and an arrow to see more details. I designed an icon system with a legend (new product, healthy option, chef's suggestion and preparation time) and added a basket with a counter for the order, plus zoom in and zoom out buttons.",
      ],
      implementation: [
        "I implemented it in Figma: I created the screens for each category and for the dish details, used components for the cards and icons to keep the design consistent, and connected everything in Prototype mode so it can be navigated by clicking.",
      ],
      result: [
        "The result is an interactive digital menu prototype that can be explored as if it were the real app. It shows how visual design and icons help customers decide what to order faster and more pleasantly.",
      ],
    },
  },
];

const ui = {
  es: {
    readMore: "Leer más",
    close: "Cerrar",
    empty: "Pronto habrá nuevas entradas.",
    prototype: "Ver prototipo en Figma",
    sections: {
      description: "Descripción",
      requirements: "Requerimientos del cliente",
      design: "¿Cómo se diseñó la solución?",
      implementation: "¿Cómo se implementó la solución?",
      result: "¿Cuál fue el resultado?",
    },
  },
  en: {
    readMore: "Read more",
    close: "Close",
    empty: "New posts coming soon.",
    prototype: "View Figma prototype",
    sections: {
      description: "Description",
      requirements: "Client requirements",
      design: "How was the solution designed?",
      implementation: "How was the solution implemented?",
      result: "What was the result?",
    },
  },
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

  const sorted = posts;

  const fillModal = (post) => {
    const lang = getLang();
    const p = post[lang];
    const labels = ui[lang].sections;
    modalTag.textContent = p.tag;
    modalDate.textContent = post.date ? formatDate(post.date, lang) : "";
    if (post.date) modalDate.setAttribute("datetime", post.date);
    modalTitle.textContent = p.title;

    const nodes = [];
    if (post.image) {
      const img = el("img", "blog-modal-img");
      img.src = post.image;
      img.alt = p.title;
      nodes.push(img);
    }
    Object.keys(labels).forEach((key) => {
      if (!p[key] || !p[key].length) return;
      const section = el("section", "blog-modal-section");
      section.append(el("h4", "blog-modal-heading", labels[key]));
      p[key].forEach((par) => section.append(el("p", "", par)));
      nodes.push(section);
    });
    if (post.link) {
      const a = el("a", "btn blog-modal-link", ui[lang].prototype);
      a.href = post.link;
      a.target = "_blank";
      a.rel = "noopener";
      nodes.push(a);
    }
    modalBody.replaceChildren(...nodes);
    closeBtn.setAttribute("aria-label", ui[lang].close);
  };

  const openPost = (post) => {
    lastFocus = document.activeElement;
    openId = post.id;
    fillModal(post);
    modal.hidden = false;
    modal.querySelector(".blog-modal-content").scrollTop = 0;
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

        if (post.image) {
          const imgBtn = el("button", "blog-card-img-btn");
          imgBtn.type = "button";
          imgBtn.setAttribute("aria-label", p.title);
          const img = el("img", "blog-card-img");
          img.src = post.image;
          img.alt = "";
          img.loading = "lazy";
          imgBtn.append(img);
          imgBtn.addEventListener("click", () => openPost(post));
          card.append(imgBtn);
        }

        const body = el("div", "blog-card-body");
        const meta = el("div", "blog-card-meta");
        meta.append(el("span", "blog-tag", p.tag));
        if (post.date) {
          const time = el("time", "blog-date", formatDate(post.date, lang));
          time.setAttribute("datetime", post.date);
          meta.append(time);
        }

        const btn = el("button", "blog-read", ui[lang].readMore);
        btn.type = "button";
        btn.append(el("span", "blog-read-arrow", " →"));
        btn.addEventListener("click", () => openPost(post));

        body.append(meta, el("h3", "blog-card-title", p.title), el("p", "blog-card-excerpt", p.excerpt), btn);
        card.append(body);
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
