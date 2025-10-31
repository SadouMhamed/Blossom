import React, { useEffect } from "react";
import "./TransitionPage.scss";

const TransitionPage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="transition-page">
      {/* Animated logos background */}
      <div className="animated-logos">
        <img src="/LogoBlack.png" alt="Logo" className="logo-float logo-1" />
        <img src="/LogoWhite.png" alt="Logo" className="logo-float logo-2" />
        <img
          src="/sansBackGround.png"
          alt="Logo"
          className="logo-float logo-3"
        />
        <img src="/LogoBlack.png" alt="Logo" className="logo-float logo-4" />
        <img
          src="/sansBackGround.png"
          alt="Logo"
          className="logo-float logo-5"
        />
        <img src="/LogoWhite.png" alt="Logo" className="logo-float logo-6" />
        <img src="/LogoBlack.png" alt="Logo" className="logo-float logo-7" />
        <img
          src="/sansBackGround.png"
          alt="Logo"
          className="logo-float logo-8"
        />
      </div>

      {/* Contenu principal */}
      <div className="transition-content">
        <div className="vestiaire-logo">BLOSSOM&PARTNERS</div>

        <div className="welcome-text">
          <div className="welcome-line">Welcome To</div>
          <div className="year-line">The 2023</div>
          <div className="brand-line">Vestiaire Collective</div>
          <div className="report-line">Impact Report</div>
        </div>

        <div className="long-live-text">Long Live Fashion!</div>
      </div>
    </div>
  );
};

export default TransitionPage;
