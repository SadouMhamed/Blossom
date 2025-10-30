import React, { useEffect, useState } from "react";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("#ff5722"); // Default orange

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      if (!e.target) return;

      const isClickable =
        e.target.classList?.contains("clickable") ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A" ||
        (e.target.closest && e.target.closest(".clickable")) ||
        (e.target.closest && e.target.closest("button")) ||
        (e.target.closest && e.target.closest("a"));

      setIsHovering(isClickable);

      // Check if hovering over a section with a custom color
      const scrollSection = e.target.closest(".scroll-section");
      if (scrollSection && scrollSection.dataset.sectionColor) {
        setCursorColor(scrollSection.dataset.sectionColor);
      } else {
        setCursorColor("#ff5722"); // Reset to default orange
      }
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isHovering ? "hovering" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="cursor-inner"
        style={{
          backgroundColor: isHovering ? cursorColor : "#ff5722",
        }}
      >
        <img src="/sansBackGround.png" alt="Logo" className="cursor-logo" />
      </div>
    </div>
  );
};

export default CustomCursor;
