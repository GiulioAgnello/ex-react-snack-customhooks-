import { useState, useEffect } from "react";

export default function useCustomPointer(component) {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPointerPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Funzione di cleanup per rimuovere l'event listener
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: pointerPosition.y,
        left: pointerPosition.x,
        transform: "traslate(-50%, -50%)",
        cursor: "none",
      }}
    >
      {component}
    </div>
  );
}
