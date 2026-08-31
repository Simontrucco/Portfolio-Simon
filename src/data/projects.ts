/**
 * ============================================================================
 * DATOS DE PROYECTOS
 * ============================================================================
 * Editá este archivo para cambiar textos, imágenes y videos del portfolio.
 * - Las imágenes se importan desde src/assets (agregá las tuyas ahí).
 * - videoSource puede ser null si el proyecto todavía no tiene demo en video.
 *   Ej: videoSource: "/videos/mi-demo.mp4"  (archivo en public/videos/)
 * ============================================================================
 */

import projGame from "@/assets/proj-game.jpg";
import projGame2 from "@/assets/proj-game-2.jpg";
import projGame3 from "@/assets/proj-game-3.jpg";
import projGame4 from "@/assets/proj-game-4.jpg";
import projWeb from "@/assets/proj-web.jpg";
import projWeb2 from "@/assets/proj-web-2.jpg";
import projWeb3 from "@/assets/proj-web-3.jpg";
import projWeb4 from "@/assets/proj-web-4.jpg";
import projBrand from "@/assets/proj-brand.jpg";
import projOther2 from "@/assets/proj-other-2.jpg";
import projOther3 from "@/assets/proj-other-3.jpg";
import detailProcess from "@/assets/detail-process.jpg";
import detailSystem from "@/assets/detail-system.jpg";

/** Categorías disponibles (se usan en las tarjetas de filtro) */
export const CATEGORIES = ["Juegos", "Sitios webs / Marketing", "Otros"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  category: Category;
  coverImage: string;
  title: string;
  type: string; // Ej: "Games Design", "Web Development"
  description: string; // Descripción corta en la lista
  // --- Vista detallada ---
  pageTitle: string;
  pageDescription: string;
  photo1: string;
  photo2: string;
  videoSource: string | null; // Ej: "/videos/demo.mp4"
  designObjectives: { title: string; text: string }[];
  designProcess: { title: string; text: string }[];
  processPhotos: string[]; // Grilla de 3 fotos
};

/** Bloques reutilizables para no repetir texto en cada proyecto */
const OBJETIVOS_BASE = [
  {
    title: "Visual Representation",
    text: "Un lenguaje visual coherente y reconocible en todos los puntos de contacto del proyecto.",
  },
  {
    title: "Market Appeal",
    text: "Decisiones de diseño orientadas a destacar frente a la competencia y captar atención rápido.",
  },
  {
    title: "Brand Alignment",
    text: "Tipografía, color y tono alineados a la identidad de la marca en cada pieza.",
  },
];

const PROCESO_BASE = [
  {
    title: "Research & Inspiration",
    text: "Análisis de referencias, competencia y necesidades reales de los usuarios del proyecto.",
  },
  {
    title: "Concept Development",
    text: "Bocetos, wireframes y definición del sistema de diseño: grilla, tipografía y componentes.",
  },
  {
    title: "Design & Iteration",
    text: "Prototipos validados con usuarios reales y ajustes de jerarquía, contraste y microcopy.",
  },
  {
    title: "Finalization",
    text: "Entrega final: assets optimizados, desarrollo responsive y medición de resultados.",
  },
];

export const PROJECTS: Project[] = [
  // ------------------------------ JUEGOS (4) ------------------------------
  {
    id: "neon-runner",
    category: "Juegos",
    coverImage: projGame,
    title: "Neon Runner",
    type: "Games Design",
    description:
      "Juego arcade 2D con estética neón: diseño de niveles, UI in-game y dirección de arte para una experiencia rápida y adictiva.",
    pageTitle: "Neon Runner",
    pageDescription:
      "Neon Runner es un arcade de scroll lateral pensado para sesiones cortas en mobile. Trabajé la dirección de arte, el diseño de niveles y toda la interfaz in-game, buscando legibilidad absoluta a alta velocidad sin perder personalidad visual.",
    photo1: projGame,
    photo2: detailSystem,
    videoSource: "/videos/neon-runner.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [detailProcess, detailSystem, projGame],
  },
  {
    id: "forest-jump",
    category: "Juegos",
    coverImage: projGame2,
    title: "Forest Jump",
    type: "Games Design / Pixel Art",
    description:
      "Plataformero 2D con arte pixel y paleta vibrante: diseño de personajes, niveles progresivos y HUD amigable.",
    pageTitle: "Forest Jump",
    pageDescription:
      "Un plataformero de exploración pensado para público familiar. Diseñé los personajes, la curva de dificultad de los 30 niveles y un HUD mínimo que deja el protagonismo al escenario ilustrado.",
    photo1: projGame2,
    photo2: detailProcess,
videoSource: "/videos/forest-jump.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projGame2, detailProcess, detailSystem],
  },
  {
    id: "block-logic",
    category: "Juegos",
    coverImage: projGame3,
    title: "Block Logic",
    type: "Puzzle / UX Mobile",
    description:
      "Puzzle isométrico para tablet: sistema de niveles, onboarding sin texto y una UI pastel accesible.",
    pageTitle: "Block Logic",
    pageDescription:
      "Puzzle isométrico donde el desafío es la claridad. Definí un onboarding sin texto, jerarquía de colores accesible y un sistema de progresión que mantiene la retención sin frustrar al jugador.",
    photo1: projGame3,
    photo2: detailSystem,
videoSource: "/videos/block-logic.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projGame3, detailSystem, detailProcess],
  },
  {
    id: "turbo-circuit",
    category: "Juegos",
    coverImage: projGame4,
    title: "Turbo Circuit",
    type: "Arcade Racing / Key Art",
    description:
      "Racing arcade retro: key art, identidad del juego y piezas promocionales para tiendas de apps.",
    pageTitle: "Turbo Circuit",
    pageDescription:
      "Racing arcade inspirado en los 80. Desarrollé la key art, el sistema de identidad del juego y todas las piezas promocionales, priorizando impacto visual en la primera captura de la store.",
    photo1: projGame4,
    photo2: detailProcess,
videoSource: "/videos/turbo-circuit.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projGame4, detailProcess, detailSystem],
  },

  // ------------------- SITIOS WEBS / MARKETING (4) -------------------
  {
    id: "ecommerce-atelier",
    category: "Sitios webs / Marketing",
    coverImage: projWeb,
    title: "Atelier E-commerce",
    type: "Web Development",
    description:
      "Tienda online completa con enfoque en conversión: arquitectura de información, diseño UX/UI y desarrollo Frontend responsive.",
    pageTitle: "Atelier E-commerce",
    pageDescription:
      "Un e-commerce de accesorios premium construido desde cero. Definí la arquitectura de información, diseñé el sistema de componentes y desarrollé el Frontend, integrando la estrategia de marketing digital en cada punto del embudo de compra.",
    photo1: projWeb,
    photo2: detailSystem,
    videoSource: "/videos/ecommerce-atelier.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [detailProcess, projWeb, detailSystem],
  },
  {
    id: "resto-landing",
    category: "Sitios webs / Marketing",
    coverImage: projWeb2,
    title: "Landing Gastronómica",
    type: "Web Design & Development",
    description:
      "Landing de restaurante con reservas online, menú dinámico y optimización SEO local.",
    pageTitle: "Landing Gastronómica",
    pageDescription:
      "Sitio de un restaurante con foco en reservas. Diseñé y desarrollé la landing, integré el sistema de reservas y trabajé el SEO local para captar búsquedas de la zona.",
    photo1: projWeb2,
    photo2: detailSystem,
videoSource: "/videos/resto-landing.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projWeb2, detailProcess, detailSystem],
  },
  {
    id: "saas-dashboard",
    category: "Sitios webs / Marketing",
    coverImage: projWeb3,
    title: "Dashboard SaaS",
    type: "Product & UX/UI Design",
    description:
      "Panel de analytics en modo oscuro: visualización de datos, componentes reutilizables y flujos de onboarding.",
    pageTitle: "Dashboard SaaS",
    pageDescription:
      "Panel de analítica para un producto SaaS. Definí la arquitectura de la información, la librería de componentes en modo oscuro y los flujos de onboarding que reducen el tiempo hasta el primer valor.",
    photo1: projWeb3,
    photo2: detailSystem,
videoSource: "/videos/saas-dashboard.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projWeb3, detailSystem, detailProcess],
  },
  {
    id: "campana-social",
    category: "Sitios webs / Marketing",
    coverImage: projWeb4,
    title: "Campaña Social Ads",
    type: "Digital Marketing",
    description:
      "Campaña multiplataforma: piezas publicitarias, copies y testeo A/B orientado a conversión.",
    pageTitle: "Campaña Social Ads",
    pageDescription:
      "Estrategia y producción creativa de una campaña de social ads: sistema de plantillas, variantes para testeo A/B y seguimiento de métricas para escalar los anuncios ganadores.",
    photo1: projWeb4,
    photo2: detailProcess,
videoSource: "/videos/campana-social.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projWeb4, detailProcess, detailSystem],
  },

  // ------------------------------ OTROS (3) ------------------------------
  {
    id: "identidad-marca",
    category: "Otros",
    coverImage: projBrand,
    title: "Sistema de Identidad Visual",
    type: "Brand Design",
    description:
      "Identidad de marca integral: logotipo, paleta, tipografías y aplicaciones para papelería y redes sociales.",
    pageTitle: "Sistema de Identidad Visual",
    pageDescription:
      "Construcción de una identidad de marca completa para un estudio emergente: desde el concepto y el logotipo hasta el manual de uso, las piezas de papelería y las plantillas de contenido para redes.",
    photo1: projBrand,
    photo2: detailProcess,
videoSource: "/videos/identidad-marca.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projBrand, detailProcess, detailSystem],
  },
  {
    id: "editorial-print",
    category: "Otros",
    coverImage: projOther2,
    title: "Editorial & Print",
    type: "Editorial Design",
    description:
      "Diseño editorial de un catálogo fotográfico: grilla, tipografía y preparación de archivos para imprenta.",
    pageTitle: "Editorial & Print",
    pageDescription:
      "Catálogo impreso para un estudio de fotografía. Definí la grilla editorial, la jerarquía tipográfica y el pliego completo, incluyendo la preparación técnica de archivos para imprenta.",
    photo1: projOther2,
    photo2: detailProcess,
videoSource: "/videos/editorial-print.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projOther2, detailProcess, detailSystem],
  },
  {
    id: "packaging-line",
    category: "Otros",
    coverImage: projOther3,
    title: "Línea de Packaging",
    type: "Packaging Design",
    description:
      "Sistema de packaging para una línea de productos: etiquetas, jerarquía en góndola y mockups finales.",
    pageTitle: "Línea de Packaging",
    pageDescription:
      "Sistema de packaging escalable para una familia de productos. Trabajé el código cromático por variedad, la jerarquía de lectura en góndola y los mockups de presentación para el cliente.",
    photo1: projOther3,
    photo2: detailSystem,
    videoSource: "/videos/packaging-line.mp4",
    designObjectives: OBJETIVOS_BASE,
    designProcess: PROCESO_BASE,
    processPhotos: [projOther3, detailSystem, detailProcess],
  },
];

/** Servicios mostrados en la sección "Services" del Home */
export const SERVICES = [
  {
    title: "Diseño UX/UI",
    text: "Interfaces intuitivas y atractivas que mejoran la experiencia completa del usuario.",
  },
  {
    title: "Brand Design",
    text: "Identidades de marca coherentes que conectan con la audiencia y comunican valores.",
  },
  {
    title: "Desarrollo Web",
    text: "Sitios y e-commerce rápidos, responsivos y fáciles de mantener.",
  },
  {
    title: "Marketing Digital",
    text: "Estrategias de contenido y campañas orientadas a resultados medibles.",
  },
  {
    title: "Contenido y Piezas",
    text: "Piezas publicitarias y contenido para redes alineados a la identidad visual.",
  },
  {
    title: "Product Design",
    text: "Productos digitales que equilibran funcionalidad, usabilidad y estética.",
  },
];
