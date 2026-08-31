/**
 * ProjectDetailView — Vista de caso de estudio a pantalla completa.
 * Estructura: header con "Atrás" -> título + descripción -> video demo en
 * pantalla grande (16:9, glow y botón play) -> galería -> Design Objects
 * (fondo oscuro) -> Design Process -> grilla de 3 fotos.
 */
import { useRef, useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

type Props = {
  project: Project;
  onBack: () => void;
};

export function ProjectDetailView({ project, onBack }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
        <Reveal>
          <h1 className="text-5xl font-extrabold leading-[0.95] md:text-7xl">
            {project.pageTitle}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground md:pl-16 md:text-2xl">
            {project.pageDescription}
          </p>
        </Reveal>
      </section>

      {/* Video demo en grande (solo si el proyecto tiene videoSource) */}
      {project.videoSource && (
        <section className="relative mx-auto max-w-7xl px-5 pb-16 md:px-10">
          {/* Halo de luz decorativo detrás del video */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[140%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-black shadow-2xl ring-1 ring-border">
            <video
              ref={videoRef}
              src={project.videoSource}
              poster={project.photo1}
              controls={isPlaying}
              muted
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />
            {!isPlaying && (
              <button
                type="button"
                onClick={() => void videoRef.current?.play()}
                aria-label={`Reproducir video de ${project.title}`}
                className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors duration-300 hover:bg-black/10"
              >
                <span className="relative flex size-20 items-center justify-center md:size-24">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform duration-300 hover:scale-110 md:size-24">
                    <Play size={30} fill="currentColor" className="ml-1" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </section>
      )}

      {/* Galería: dos fotos en paralelo */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-16 md:grid-cols-2 md:px-10">
        {[project.photo1, project.photo2].map((photo, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-3xl bg-muted ring-1 ring-border transition-shadow duration-300 hover:shadow-2xl"
          >
            <img
              src={photo}
              alt={`${project.title} — imagen ${i + 1}`}
              loading="lazy"
              width={1280}
              height={960}
              className="img-zoom aspect-[4/3] w-full object-cover"
            />
          </div>
        ))}
      </section>

      {/* Design Objects — fondo oscuro, 3 columnas */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold md:text-4xl">
              Design Objects
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:divide-x md:divide-primary-foreground/15">
            {project.designObjectives.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 100}
                className="px-0 text-center md:px-8"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process — lista vertical sobre fondo claro */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">Design Process</h2>
        </Reveal>
        <div className="mt-8 flex flex-col gap-4">
          {project.designProcess.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 80}>
              <div className="grid grid-cols-1 gap-4 rounded-2xl bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-[1fr_2fr] md:gap-10">
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Grilla de fotos del proceso */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 pb-24 sm:grid-cols-3 md:px-10">
        {project.processPhotos.map((photo, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-2xl bg-muted ring-1 ring-border transition-shadow duration-300 hover:shadow-xl"
          >
            <img
              src={photo}
              alt={`${project.title} — proceso ${i + 1}`}
              loading="lazy"
              width={1280}
              height={960}
              className="img-zoom aspect-[3/4] w-full object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
}