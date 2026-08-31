/**
 * ProjectList — Listado vertical de proyectos ya filtrados.
 * Al presionar "View Project" avisa al padre para abrir la vista de detalle.
 * Efectos: reveal escalonado al scroll, zoom de imagen y botón con flecha.
 */
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

type Props = {
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

export function ProjectList({ projects, onOpenProject }: Props) {
  if (projects.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        Todavía no hay proyectos publicados en esta categoría.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={(index % 3) * 90}>
          <article className="group grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
            {/* Portada: zoom suave al hover + elevación */}
            <div className="overflow-hidden rounded-3xl bg-muted shadow-sm ring-1 ring-border transition-all duration-300 group-hover:shadow-2xl group-hover:ring-foreground/20">
              <img
                src={project.coverImage}
                alt={project.title}
                loading="lazy"
                width={1280}
                height={960}
                className="img-zoom aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* Info del proyecto */}
            <div>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-semibold tracking-widest tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden className="h-px w-8 bg-border" />
                {project.type}
              </p>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                {project.description}
              </p>
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className="group/btn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-medium transition-all duration-200 hover:border-transparent hover:bg-primary hover:text-primary-foreground md:w-auto md:min-w-64"
              >
                View Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}