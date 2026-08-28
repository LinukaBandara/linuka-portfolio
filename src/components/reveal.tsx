import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — use for grids/lists of cards */
  delay?: number;
  /** "up" (default) fades + slides up. "none" only fades. */
  direction?: "up" | "none";
  /** Element tag to render — keep semantic tags (article, li, a, etc) for SEO/a11y. Defaults to div. */
  as?: ElementType;
  /** Any other props (href, target, onClick, aria-*, ...) are passed through to the rendered tag. */
  [key: string]: unknown;
}

/**
 * Wraps content and animates it in (opacity + translateY) the first time
 * it scrolls into view. Uses IntersectionObserver so it's cheap and only
 * fires once per element. Fully inert when the user has
 * prefers-reduced-motion enabled (handled globally in styles.css).
 */
export function Reveal({ children, className, delay = 0, direction = "up", as: Tag = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={direction === "none" ? "fade" : "up"}
      data-reveal-state={visible ? "in" : "out"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
