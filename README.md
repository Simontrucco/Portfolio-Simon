# Simón Trucco Portfolio

Esta es una solicitud detallada para construir un sitio web de portfolio estilo Single Page Application (SPA) para "Simón Trucco", basado en la estructura por pasos, contenidos específicos y las referencias visuales adjuntas.

El sitio debe desarrollarse como una aplicación de una sola página (SPA) utilizando React y estilos con Tailwind CSS, priorizando un código limpio, bien estructurado y fácil de modificar posteriormente. Las transiciones entre vistas deben ser fluidas e instantáneas para ofrecer una experiencia de usuario óptima.

Arquitectura Principal y Funcionalidad Core (Navegación SPA)

Todo el portfolio operará dentro de una única página. Al hacer clic en las categorías y proyectos, la vista central debe actualizarse al instante sin recargar la página. Se debe implementar una lógica de estados global para renderizar la vista correspondiente según la selección del usuario.

Lógica de Gestión de Estado:

Estado para la vista activa: "Home", "Juegos", "Webs/Marketing", "Otros", o una vista detallada "ProjectDetail".

Estado independiente para almacenar los datos del proyecto seleccionado cuando se navega a la vista "ProjectDetail".

Estructura de Datos de los Proyectos (Ejemplo para el código):

Define un array de objetos JavaScript bien comentado con la información de los proyectos (fácil de editar después):

JavaScript

[

  {

    id: "proyecto-1",

    category: "Juegos",

    coverImageColor: "/assets/images/proyecto1-color.jpg",

    coverImageBW: "/assets/images/proyecto1-bw.jpg",

    title: "Título del Juego",

    type: "Games Design", // (como en la segunda foto)

    description: "Descripción corta para la lista general de proyectos.",

    // Datos para la vista detallada (ProjectDetail)

    pageTitle: "Título Principal del Proyecto", // (como 'Luminous Moments' en la tercera foto)

    pageDescription: "Descripción extendida tipo caso de estudio.",

    photo1: "/assets/images/proyecto1-detalle1.jpg",

    photo2: "/assets/images/proyecto1-detalle2.jpg",

    videoSource: "/assets/videos/proyecto1-demo.mp4", // Ruta al video HTML5

    designObjectives: [ // Datos para la sección de objetos (cuarta foto)

      { title: "Visual Representation", text: "..." },

      { title: "Market Appeal", text: "..." },

      { title: "Brand Alignment", text: "..." },

    ],

    designProcess: [ // Datos para el proceso de diseño (quinta foto)

      { title: "Research & Inspiration", text: "..." },

      { title: "Concept Development", text: "..." },

      { title: "Design & Iteration", text: "..." },

      { title: "Finalization", text: "..." },

    ],

    processPhotos: [ "/assets/images/proc1.jpg", "/assets/images/proc2.jpg" ] // Fotos adicionales (sexta foto)

  },

  // Agregar más proyectos...

]

Implementación Paso a Paso por Vistas

1) Vista Principal / Portada (Home) - Basado en la primera foto

Diseño y Maquetación:

Sección de dos columnas:

Columna Izquierda: Contenedor rectangular con bordes redondeados para la foto de perfil de Simón Trucco.

Columna Derecha: Tipografía grande y textos descriptivos.

Efectos Interactivos y Textos:

Foto de Perfil: Utilizar una foto a color. Aplicar un filtro CSS (filter: grayscale(100%);) por defecto. Al hacer hover con el mouse, eliminar el filtro al instante (filter: grayscale(0%); transition: filter 0.3s ease-out;).

Título Principal: "Web Developer y Digital Marketing Specialist" (en tipografía grande y negrita).

Subtítulo (en negrita): "Simón Trucco, diseñador UX/UI y desarrollador Frontend orientado a estrategias de Marketing, enfocado en crear experiencias digitales escalables."

Texto descriptivo: "Especializado en conectar la programación y el diseño con estrategias efectivas de Marketing digital. Ayudo a negocios a construir su presencia online desde cero: desde la identidad visual, contenido y piezas publicitarias, hasta el desarrollo de sitios web funcionales, e-commerce e interfaces interactivas."

Carrusel de Habilidades (Marquee Infinito): Ubicado justo debajo de la portada. Un carrusel continuo que corre de izquierda a derecha a velocidad moderada y profesional.

Texto continuo: "Estrategia de Marca • DESARROLLO WEB • Marketing Digital • Diseño UX/UI" (repetido en bucle).

2) Categorías y Lista de Proyectos - Basado en la segunda foto

Sección ubicada debajo del carrusel que cambia dinámicamente según la categoría activa.

Lógica y Tarjetas de Categoría:

Crear tres tarjetas interactivas superiores: "Juegos", "Sitios webs / Marketing" y "Otros".

Al hacer clic en una tarjeta, la lista inferior debe filtrarse al instante para mostrar solo los proyectos de esa categoría.

Lista de Proyectos (Contenido Dinámico):

Encabezado principal "Projects" (estilo de la segunda foto).

Listado vertical de proyectos filtrados:

Izquierda: Foto de portada en contenedor redondeado. Efecto blanco y negro por defecto y a color al hacer hover instantáneo.

Derecha: Categoría/tipo, título del proyecto, párrafo descriptivo y botón "View Project".

Interacción: Al presionar "View Project", cambiar el estado de la SPA para abrir la vista "ProjectDetail" cargando los datos del proyecto correspondiente.

3) Vista Detalle de Proyecto (ProjectDetail) - Basado en la tercera, cuarta, quinta y sexta foto

Vista de pantalla completa para ver el caso de estudio completo.

Navegación Global en Detalle:

En la parte superior (header fijo o limpio), incluir un botón visible de "Volver a Inicio" o "Atrás" que regrese al usuario a la vista principal sin perder fluidez.

Estructura Vertical de la Vista:

Encabezado y Texto Principal (Tercera foto): Título grande (pageTitle) y descripción detallada (pageDescription).

Reproductor de Video Principal: Un contenedor destacado para video HTML5 (<video src="/assets/videos/demo.mp4" controls autoplay muted loop>) que muestre la demo del sitio o juego funcionando de forma óptima.

Galería Visual (Tercera y Sexta foto): Dos fotos en paralelo debajo del video y una cuadrícula de 3 fotos secundarias más abajo. Todas con el efecto inicial en blanco y negro y color al hover.

Sección Design Objects (Cuarta foto): Cuadrícula con fondo oscuro y 3 tarjetas verticales (Visual Representation, Market Appeal, Brand Alignment) con sus títulos y párrafos.

Sección Design Process (Quinta foto): Lista vertical con fondo claro de los pasos del proceso (Research & Inspiration, Concept Development, etc.).

4) Sección de Servicios y Contacto - Basado en la última foto

Esta sección estará al final de la página principal (Home).

Estructura:

Grid de Servicios (Última foto): Estructura a dos columnas con el título "Services", la descripción a la izquierda y las tarjetas de servicios a la derecha (UX/UI Design, Brand Design, etc.).

Sección de Contacto (Debajo de Servicios):

Un área visualmente cuidada para canales de contacto directos: LinkedIn, Gmail, Teléfono e Instagram.

Efectos sutiles y profesionales: Iconos limpios (usando lucide-react) con animaciones suaves al hover (por ejemplo, ligero desplazamiento hacia arriba hover:-translate-y-1 o subrayado animado).

Buenas Prácticas de Código y Requisitos Técnicos

Modularidad: Organizar el proyecto en componentes limpios y reutilizables dentro de /components: <CoverSection/>, <CategoryFilter/>, <ProjectList/>, <ProjectDetailView/>, <ServiceGrid/>, <ContactLinks/>.

Manejo de Estado Simplificado: Utilizar únicamente useState y useEffect de React para mantener un flujo de control claro, entendible y sin enredos para posterior edición en VS Code.

Rendimiento: Carga optimizada de archivos locales usando la etiqueta nativa <video> de HTML5 para los clips de los proyectos.

Estilos Tailwind CSS: Aplicar las clases utilitarias de Tailwind manteniendo la paleta y contraste de las imágenes de referencia (blanco, gris claro y negro profundo).

Comentarios en el Código: Incluir comentarios explicativos en cada componente y en el array de datos para facilitar la personalización manual de textos y rutas de imágenes.

Diseño Adaptativo (Responsive): Asegurar mediante breakpoints de Tailwind (md:, lg:) que la interfaz se ajuste perfectamente a dispositivos móviles y escritorios.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/307fb1e1-d0e2-4be2-bba1-afd8e6050132).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
