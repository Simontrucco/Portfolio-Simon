/**
 * ============================================================================
 * DATOS DE PROYECTOS
 * ============================================================================
 * Editá este archivo para cambiar textos, imágenes y videos del portfolio.
 * - Las imágenes se importan desde src/assets (agregá las tuyas ahí).
 * - videoSource puede ser null si el proyecto todavía no tiene demo en video.
 * ============================================================================
 */

import projGame from "@/assets/proj-game.jpg";
import projWeb from "@/assets/proj-web.jpg";
import projBrand from "@/assets/proj-brand.jpg";
import detailProcess from "@/assets/detail-process.jpg";
import detailSystem from "@/assets/detail-system.jpg";

/** Categorías disponibles (se usan en las tarjetas de filtro) */
export const CATEGORIES = ["Juegos", "Sitios webs / Marketing", "Otros"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Project = {
  id: string;
  category: Category;
  coverImage: string; // Portada (se muestra en B&N y a color al hover)
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

export const PROJECTS: Project[] = [
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
    videoSource: null, // Colocá acá la ruta del video: "/videos/neon-runner.mp4"
    designObjectives: [
      {
        title: "Visual Representation",
        text: "La identidad visual debía transmitir velocidad y energía nocturna, con una paleta neón consistente en todos los assets.",
      },
      {
        title: "Market Appeal",
        text: "El juego tenía que competir en un género saturado, destacándose desde la primera captura en la tienda de apps.",
      },
      {
        title: "Brand Alignment",
        text: "Cada pieza publicitaria y el propio juego comparten el mismo sistema tipográfico y cromático.",
      },
    ],
    designProcess: [
      {
        title: "Research & Inspiration",
        text: "Analicé referencias del arcade retro y de la estética synthwave para definir un lenguaje visual reconocible.",
      },
      {
        title: "Concept Development",
        text: "Bocetos de niveles, pruebas de contraste y definición del HUD mínimo necesario para jugar sin distracciones.",
      },
      {
        title: "Design & Iteration",
        text: "Testeos con jugadores reales para ajustar dificultad, feedback visual y tiempos de respuesta de la interfaz.",
      },
      {
        title: "Finalization",
        text: "Exportación de assets optimizados, sistema de partículas final y piezas de marketing para lanzamiento.",
      },
    ],
    processPhotos: [detailProcess, detailSystem, projGame],
  },
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
      "Un e-commerce de accesorios premium construido desde cero. Definí la arquitectura de información, diseñé el sistema de componentes y desarrollé el Frontend, integrando la estrategia de marketing digital en cada punto de contacto del embudo de compra.",
    photo1: projWeb,
    photo2: detailSystem,
    videoSource: null, // Ej: "/videos/atelier-demo.mp4"
    designObjectives: [
      {
        title: "Visual Representation",
        text: "Un lenguaje visual sobrio que deje el protagonismo al producto y sostenga la percepción de marca premium.",
      },
      {
        title: "Market Appeal",
        text: "Fichas de producto claras, prueba social y checkout corto para reducir el abandono del carrito.",
      },
      {
        title: "Brand Alignment",
        text: "El sitio, el email marketing y las piezas de redes comparten la misma identidad y tono de comunicación.",
      },
    ],
    designProcess: [
      {
        title: "Research & Inspiration",
        text: "Auditoría de competidores y entrevistas con clientas para mapear objeciones reales de compra.",
      },
      {
        title: "Concept Development",
        text: "Wireframes de las vistas clave y definición del sistema de diseño: tipografía, grilla y componentes.",
      },
      {
        title: "Design & Iteration",
        text: "Prototipos navegables validados con usuarios; ajustes de jerarquía y microcopy en el checkout.",
      },
      {
        title: "Finalization",
        text: "Desarrollo Frontend responsive, optimización de performance y seguimiento de eventos de conversión.",
      },
    ],
    processPhotos: [detailProcess, projWeb, detailSystem],
  },
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
    videoSource: null,
    designObjectives: [
      {
        title: "Visual Representation",
        text: "Una marca reconocible en tamaños mínimos y coherente en soportes impresos y digitales.",
      },
      {
        title: "Market Appeal",
        text: "Posicionamiento diferencial frente a competidores con identidades genéricas.",
      },
      {
        title: "Brand Alignment",
        text: "Reglas claras de uso para que el equipo mantenga la consistencia sin diseñador presente.",
      },
    ],
    designProcess: [
      {
        title: "Research & Inspiration",
        text: "Workshop de marca, definición de atributos y moodboards de dirección visual.",
      },
      {
        title: "Concept Development",
        text: "Exploración tipográfica y construcción geométrica del logotipo en tres rutas distintas.",
      },
      {
        title: "Design & Iteration",
        text: "Refinamiento de la ruta elegida, pruebas de contraste y versiones monocromáticas.",
      },
      {
        title: "Finalization",
        text: "Entrega del manual de marca, archivos vectoriales y plantillas editables.",
      },
    ],
    processPhotos: [projBrand, detailProcess, detailSystem],
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
