/**
 * ContactLinks — Canales de contacto directo con iconos de lucide-react.
 * Cambiá los href por tus datos reales.
 */
import { Linkedin, Mail, Phone, Instagram } from "lucide-react";

const CONTACTS = [
  {
    label: "LinkedIn",
    value: "/in/simontrucco",
    href: "https://www.linkedin.com/in/simontrucco",
    Icon: Linkedin,
  },
  {
    label: "Gmail",
    value: "simontrucco@gmail.com",
    href: "mailto:simontrucco@gmail.com",
    Icon: Mail,
  },
  {
    label: "Teléfono",
    value: "+54 9 351 000 0000",
    href: "tel:+5493510000000",
    Icon: Phone,
  },
  {
    label: "Instagram",
    value: "@simontrucco",
    href: "https://instagram.com/simontrucco",
    Icon: Instagram,
  },
];

export function ContactLinks() {
  return (
    <section className="rounded-3xl bg-primary px-6 py-14 text-primary-foreground md:px-14 md:py-20">
      <h2 className="text-5xl font-extrabold md:text-6xl">Contacto</h2>
      <p className="mt-5 max-w-lg text-base text-primary-foreground/70">
        ¿Tenés un proyecto en mente? Escribime por el canal que prefieras y
        coordinamos una charla.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACTS.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="group flex flex-col gap-4 rounded-2xl border border-primary-foreground/15 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary-foreground/50"
          >
            <Icon size={22} className="opacity-70" />
            <span className="text-lg font-semibold">{label}</span>
            <span className="text-sm text-primary-foreground/60 group-hover:underline">
              {value}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
