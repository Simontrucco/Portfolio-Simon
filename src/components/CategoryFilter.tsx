/**
 * CategoryFilter — Tarjetas de categoría que filtran la lista de proyectos.
 * Recibe la categoría activa y una función para cambiarla (estado en el padre).
 */
import { CATEGORIES, type Category } from "@/data/projects";

type Props = {
  active: Category;
  onChange: (category: Category) => void;
};

export function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={[
              "rounded-2xl border px-6 py-7 text-left text-lg font-semibold transition-colors duration-200",
              isActive
                ? "border-foreground bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-foreground",
            ].join(" ")}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
