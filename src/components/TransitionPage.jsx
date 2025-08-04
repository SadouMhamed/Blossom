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
      {/* Formes géométriques d'arrière-plan */}
      <div className="geometric-shapes">
        <div className="shape shape-yellow"></div>
        <div className="shape shape-green"></div>
        <div className="shape shape-blue"></div>
        <div className="shape shape-pink"></div>
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
