import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const [enabled, setEnabled] = useState(false);
  const cursor = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let frame;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!cursor.current) return;
        cursor.current.style.transform = `translate3d(${event.clientX - 12}px, ${event.clientY - 12}px, 0)`;
        cursor.current.style.opacity = "0.35";
      });
    };
    const hide = () => {
      cancelAnimationFrame(frame);
      if (cursor.current) cursor.current.style.opacity = "0";
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, [enabled]);

  return enabled ? <div ref={cursor} className="custom-cursor" aria-hidden="true" /> : null;
};

export default Cursor;
