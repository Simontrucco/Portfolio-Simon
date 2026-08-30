/**
 * Portfolio SPA de Simón Trucco.
 * Toda la navegación vive en esta única página mediante useState:
 *  - view: "Home" | "ProjectDetail"
 *  - activeCategory: categoría seleccionada en las tarjetas de filtro
 *  - selectedProject: datos del proyecto abierto en la vista de detalle
 */
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { CoverSection } from "@/components/CoverSection";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProjectList } from "@/components/ProjectList";
import { ServiceGrid } from "@/components/ServiceGrid";
import { ContactLinks } from "@/components/ContactLinks";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { CATEGORIES, PROJECTS, type Category, type Project } from "@/data/projects";

const TITLE = "Simón Trucco — Web Developer y Digital Marketing Specialist";
const DESCRIPTION =
  "Portfolio de Simón Trucco: diseñador UX/UI y desarrollador Frontend orientado a estrategias de Marketing digital. Juegos, sitios web, e-commerce y branding.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  // --- Estado global de la SPA ---
  const [view, setView] = useState<"Home" | "ProjectDetail">("Home");
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Al cambiar de vista, subimos el scroll para que la transición sea limpia
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view, selectedProject?.id]);

  // Proyectos filtrados por la categoría activa
  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeCategory,
  );

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setView("ProjectDetail");
  };

  const goHome = () => {
    setView("Home");
    setSelectedProject(null);
  };

  // --- Vista detallada del proyecto ---
  if (view === "ProjectDetail" && selectedProject) {
    return <ProjectDetailView project={selectedProject} onBack={goHome} />;
  }

  // --- Vista principal (Home) ---
  return (
    <main className="animate-view-in min-h-screen bg-background">
      <CoverSection />
      <SkillsMarquee />

      {/* Categorías + lista de proyectos */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <h2 className="text-5xl font-extrabold md:text-6xl">Projects</h2>
        <div className="mt-8">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>
        <div className="mt-16 md:mt-20">
          <ProjectList
            projects={filteredProjects}
            onOpenProject={openProject}
          />
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
        <ServiceGrid />
      </section>

      {/* Contacto */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
        <ContactLinks />
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Simón Trucco — Todos los derechos reservados.
      </footer>
    </main>
  );
}
