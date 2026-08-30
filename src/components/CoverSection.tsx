/**
 * CoverSection — Portada del Home.
 * Dos columnas: foto de perfil (B&N -> color al hover) + textos principales.
 * Editá los textos directamente en este archivo.
 */
import profilePhoto from "@/assets/simon-profile.jpg";

export function CoverSection() {
  return (
    <header className="mx-auto w-full max-w-7xl px-5 pt-14 pb-10 md:px-10 md:pt-20">
      {/* Título principal gigante */}
      <h1 className="text-[13vw] leading-[0.85] font-extrabold uppercase tracking-tighter text-foreground md:text-[7.5vw]">
        Web Developer &<br />
        Digital Marketing
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-2 md:gap-14">
        {/* Columna izquierda: foto de perfil */}
        <div className="overflow-hidden rounded-3xl bg-muted">
          <img
            src={profilePhoto}
            alt="Simón Trucco, diseñador UX/UI y desarrollador Frontend"
            width={1024}
            height={1024}
            className="img-bw h-full w-full object-cover"
          />
        </div>

        {/* Columna derecha: textos */}
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-bold leading-snug text-foreground md:text-[1.75rem]">
            Simón Trucco, diseñador UX/UI y desarrollador Frontend orientado a
            estrategias de Marketing, enfocado en crear experiencias digitales
            escalables.
          </p>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Especializado en conectar la programación y el diseño con
            estrategias efectivas de Marketing digital. Ayudo a negocios a
            construir su presencia online desde cero: desde la identidad visual,
            contenido y piezas publicitarias, hasta el desarrollo de sitios web
            funcionales, e-commerce e interfaces interactivas.
          </p>
        </div>
      </div>
    </header>
  );
}
