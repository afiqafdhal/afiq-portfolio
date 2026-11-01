
"use client";

import { useEffect, useRef } from "react";

export function CursorFX() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!glow || !ring || !dot) return;

    const pointer = window.matchMedia("(pointer: fine)");
    const motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!pointer.matches || motion.matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;
    let visible = false;

    const animate = () => {
      currentX += (targetX - currentX) * 0.45;
      currentY += (targetY - currentY) * 0.45;

      glow.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      ring.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      frame = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      targetX = event.clientX;
      targetY = event.clientY;

      dot.style.transform =
        `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

      if (!visible) {
        visible = true;
        glow.classList.add("cursor-visible");
        ring.classList.add("cursor-visible");
        dot.classList.add("cursor-visible");
        frame = requestAnimationFrame(animate);
      }

      const target = event.target;

      const interactive =
        target instanceof Element &&
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        );

      ring.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const handlePointerLeave = () => {
      visible = false;

      glow.classList.remove("cursor-visible");
      ring.classList.remove("cursor-visible", "cursor-hover");
      dot.classList.remove("cursor-visible");

      cancelAnimationFrame(frame);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="cursor-fx-layer" aria-hidden="true">
      <div ref={glowRef} className="cursor-soft-glow" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
