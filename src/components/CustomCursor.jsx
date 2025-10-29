import React, { useEffect, useState } from "react";
import "./CustomCursor.scss";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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
      <div className="cursor-inner">
        {isHovering && (
          <img src="/sansBackGround.png" alt="Logo" className="cursor-logo" />
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
