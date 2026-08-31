/**
 * Reveal — Envuelve contenido para animarlo (fade + slide up) cuando
 * entra en pantalla. Usa IntersectionObserver; el prop delay permite
 * escalonar la aparición de varios elementos.
 */
import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Retraso en ms para escalonar la animación */
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}