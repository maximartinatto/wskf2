import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const setMousePosition = (x, y) => {
      mouseX = x;
      mouseY = y;
    };

    const mousemove = (e) => {
      setMousePosition(e.clientX, e.clientY);
    };

    const updateCircles = () => {
      setlargecircle({ x: mouseX, y: mouseY });
      requestAnimationFrame(updateCircles);
    };

    window.addEventListener("mousemove", mousemove);
    requestAnimationFrame(updateCircles);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <motion.div
      className="position-fixed rounded-circle bg-dark"
      style={{
        width: "25px",
        height: "25px",
        pointerEvents: "none",
        transform: `translate(${largecircle.x}px, ${largecircle.y}px)`,
        zIndex: 9999,
      }}
    />
  );
};

export default Cursor;