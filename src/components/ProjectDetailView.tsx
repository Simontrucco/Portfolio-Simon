/**
 * ProjectDetailView — Vista de caso de estudio a pantalla completa.
 * Estructura: header con "Atrás" -> título + descripción -> video -> galería
 * -> Design Objects (fondo oscuro) -> Design Process -> grilla de 3 fotos.
 */
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onBack: () => void;
};

export function ProjectDetailView({ project, onBack }: Props) {
  return (
    <div className="animate-view-in min-h-screen bg-background">
      {/* Header fijo con navegación de vuelta al inicio */}
      <div className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowLeft size={16} />
            Volver a Inicio
          </button>
          <span className="text-sm text-muted-foreground">{project.type}</span>
        </div>
      </div>

      {/* Título y descripción extendida */}
      <section className="mx-auto max-w-7xl px-5 pt-14 pb-12 md:px-10 md:pt-20">
        <h1 className="text-5xl font-extrabold leading-[0.95] md:text-7xl">
          {project.pageTitle}
        </h1>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground md:pl-16 md:text-2xl">
          {project.pageDescription}
        </p>
      </section>

      {/* Video demo (solo si el proyecto tiene videoSource) */}
      {project.videoSource && (
        <section className="mx-auto max-w-7xl px-5 pb-14 md:px-10">
          <div className="overflow-hidden rounded-3xl bg-primary">
            <video
              src={project.videoSource}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="h-auto w-full"
            />
          </div>
        </section>
      )}

      {/* Galería: dos fotos en paralelo */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-16 md:grid-cols-2 md:px-10">
        {[project.photo1, project.photo2].map((photo, i) => (
          <div key={i} className="overflow-hidden rounded-3xl bg-muted">
            <img
              src={photo}
              alt={`${project.title} — imagen ${i + 1}`}
              loading="lazy"
              width={1280}
              height={960}
              className="img-bw aspect-[4/3] w-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Design Objects — fondo oscuro, 3 columnas */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            Design Objects
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:divide-x md:divide-primary-foreground/15">
            {project.designObjectives.map((item) => (
              <div key={item.title} className="px-0 text-center md:px-8">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process — lista vertical sobre fondo claro */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <h2 className="text-3xl font-semibold md:text-4xl">Design Process</h2>
        <div className="mt-8 flex flex-col gap-4">
          {project.designProcess.map((step) => (
            <div
              key={step.title}
              className="grid grid-cols-1 gap-4 rounded-2xl bg-card p-7 md:grid-cols-[1fr_2fr] md:gap-10"
            >
              <h3 className="text-xl font-medium">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Grilla de fotos del proceso */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-24 sm:grid-cols-3 md:px-10">
        {project.processPhotos.map((photo, i) => (
          <div key={i} className="overflow-hidden rounded-2xl bg-muted">
            <img
              src={photo}
              alt={`${project.title} — proceso ${i + 1}`}
              loading="lazy"
              width={1280}
              height={960}
              className="img-bw aspect-[3/4] w-full object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
