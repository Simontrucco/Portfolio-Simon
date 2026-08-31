/**
 * ServiceGrid — Sección "Services": título + descripción a la izquierda,
 * tarjetas de servicios a la derecha con iconos. Editá los servicios en
 * src/data/projects.ts
 */
import {
  Boxes,
  Code2,
  Fingerprint,
  Image,
  Megaphone,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "Diseño UX/UI": Palette,
  "Brand Design": Fingerprint,
  "Desarrollo Web": Code2,
  "Marketing Digital": Megaphone,
  "Contenido y Piezas": Image,
  "Product Design": Boxes,
};

export function ServiceGrid() {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
      <div>
        <Reveal>
          <h2 className="text-5xl font-extrabold md:text-6xl">Services</h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-sm text-xl leading-snug text-foreground md:text-2xl">
            Ofrezco una gama completa de servicios para que cada proyecto avance
            de la forma más simple posible.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SERVICES.map((service, i) => {
          const Icon = SERVICE_ICONS[service.title] ?? Palette;
          return (
            <Reveal key={service.title} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-xl">
                <span className="flex size-11 items-center justify-center rounded-xl bg-muted transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}