"use client";

import React, { ReactNode, CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ScrollRevealProps {
  children: ReactNode;
  /** CSS class variant: "scroll-reveal" | "scroll-reveal-scale" | "scroll-reveal-fade" */
  variant?: "scroll-reveal" | "scroll-reveal-scale" | "scroll-reveal-fade";
  /** Delay in ms before animation starts */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** IntersectionObserver root margin */
  rootMargin?: string;
  /** HTML tag to render */
  as?: React.ElementType;
}

/**
 * Wrapper component for scroll-reveal animations.
 * Useful for sections that can't directly use the useScrollReveal hook.
 */
export default function ScrollReveal({
  children,
  variant = "scroll-reveal",
  delay = 0,
  className = "",
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px",
  as: Tag = "div",
}: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ threshold, rootMargin });

  const style: CSSProperties = delay > 0 ? { "--reveal-delay": `${delay}ms` } as CSSProperties : {};

  return (
    <Tag
      ref={ref}
      className={`${variant} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
