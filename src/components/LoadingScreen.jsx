import React, { useEffect, useState } from "react";
import "./LoadingScreen.scss";

const LoadingScreen = ({ onComplete }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = ["#E8A5C4", "#A8C5E8", "#FF5722", "#F4D03F"];

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
    }, 800);

    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearInterval(colorInterval);
      clearTimeout(timer);
    };
  }, [onComplete, colors.length]);

  // Choisir le logo selon la couleur de fond
  const getLogoForBackground = (colorIndex) => {
    switch (colorIndex) {
      case 0: // Rose pastel (#E8A5C4)
        return "/LogoBlack.png";
      case 1: // Bleu pastel (#A8C5E8)
        return "/LogoWhite.png";
      case 2: // Orange vif (#FF5722)
        return "/sansBackGround.png";
      case 3: // Jaune vif (#F4D03F)
        return "/sansBackGround.png";
      default:
        return "/sansBackGround.png";
    }
  };

  const currentColor = colors[currentColorIndex];
  const currentLogo = getLogoForBackground(currentColorIndex);

  return (
    <div
      className="loading-screen-minimal"
      style={{
        background: currentColor,
        transition: "background-color 1s ease",
      }}
    >
      <div className="central-logo">
        <div className="logo-container">
          <img
            src={currentLogo}
            alt="Blossom & Partners Logo"
            className="loading-logo-image"
            onError={(e) => {
              if (
                e.target.src !==
                window.location.origin + "/sansBackGround.png"
              ) {
                e.target.src = "/sansBackGround.png";
              } else {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<div class="logo-fallback">B&P</div>';
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
