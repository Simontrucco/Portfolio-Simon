/**
 * SkillsMarquee — Carrusel infinito de habilidades.
 * El contenido se duplica para que el bucle sea continuo (animación -50%).
 * Se pausa al pasar el cursor por encima. Editá SKILLS para cambiar el texto.
 */

const SKILLS = [
  "Estrategia de Marca",
  "DESARROLLO WEB",
  "Marketing Digital",
  "Diseño UX/UI",
];

export function SkillsMarquee() {
  const items = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="w-full overflow-hidden border-y border-border py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap hover:[animation-play-state:paused]">
        {/* Se renderiza dos veces la lista completa para el loop perfecto */}
        {[...items, ...items].map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-10 text-lg font-medium text-foreground md:text-2xl"
          >
            {skill}
            <span className="text-muted-foreground">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}