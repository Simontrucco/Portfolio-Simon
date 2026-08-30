/**
 * ProjectList — Listado vertical de proyectos ya filtrados.
 * Al presionar "View Project" avisa al padre para abrir la vista de detalle.
 */
import type { Project } from "@/data/projects";

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
      {projects.map((project) => (
        <article
          key={project.id}
          className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14"
        >
          {/* Portada: blanco y negro por defecto, color al hover */}
          <div className="overflow-hidden rounded-3xl bg-muted">
            <img
              src={project.coverImage}
              alt={project.title}
              loading="lazy"
              width={1280}
              height={960}
              className="img-bw aspect-[4/3] w-full object-cover"
            />
          </div>

          {/* Info del proyecto */}
          <div>
            <p className="text-sm text-muted-foreground">{project.type}</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>
            <button
              type="button"
              onClick={() => onOpenProject(project)}
              className="mt-8 w-full rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-medium transition-colors duration-200 hover:bg-primary hover:text-primary-foreground md:w-auto md:min-w-64"
            >
              View Project
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
