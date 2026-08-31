/**
 * CategoryFilter — Tarjetas de categoría que filtran la lista de proyectos.
 * Muestra la cantidad de proyectos de cada categoría.
 */
import { CATEGORIES, PROJECTS, type Category } from "@/data/projects";

type Props = {
  active: Category;
  onChange: (category: Category) => void;
};

const countFor = (category: Category) =>
  PROJECTS.filter((project) => project.category === category).length;

export function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        const count = countFor(category);
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={[
              "group flex items-center justify-between gap-3 rounded-2xl border px-6 py-7 text-left text-lg font-semibold transition-all duration-200",
              isActive
                ? "border-foreground bg-primary text-primary-foreground shadow-lg"
                : "border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-foreground hover:shadow-md",
            ].join(" ")}
          >
            <span>{category}</span>
            <span
              className={[
                "flex size-9 items-center justify-center rounded-full text-sm font-bold tabular-nums transition-colors duration-200",
                isActive
                  ? "bg-primary-foreground/15 text-primary-foreground"
                  : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground",
              ].join(" ")}
            >
              {String(count).padStart(2, "0")}
            </span>
          </button>
        );
      })}
    </div>
  );
}