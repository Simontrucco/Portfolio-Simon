/**
 * ServiceGrid — Sección "Services": título + descripción a la izquierda,
 * tarjetas de servicios a la derecha. Editá los servicios en src/data/projects.ts
 */
import { SERVICES } from "@/data/projects";

export function ServiceGrid() {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
      <div>
        <h2 className="text-5xl font-extrabold md:text-6xl">Services</h2>
        <p className="mt-6 max-w-sm text-xl leading-snug text-foreground md:text-2xl">
          Ofrezco una gama completa de servicios para que cada proyecto avance
          de la forma más simple posible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl bg-card p-7 transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
