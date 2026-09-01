"use client";

import { useCallback, useEffect, useState } from "react";

const ZOOMABLE =
  ".strip img, .viz-grid img, .viz-stories img, .shots2 img, .browser img, .phone img, .hero-img img";

export function Lightbox() {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);

  const close = useCallback(() => setImg(null), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t instanceof HTMLImageElement && t.matches(ZOOMABLE)) {
        setImg({ src: t.src, alt: t.alt });
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

  useEffect(() => {
    document.body.style.overflow = img ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [img]);

  if (!img) return null;

  return (
    <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label={img.alt}>
      <button className="lightbox-close" onClick={close} aria-label="Zatvori uvećani prikaz">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img.src} alt={img.alt} />
    </div>
  );
}
