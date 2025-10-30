import React from "react";
import "./Section2.scss";

const Section2 = ({ onClick, className = "" }) => {
  return (
    <section
      id="section-2"
      className={`scroll-section section-2 ${className}`}
      onClick={onClick}
      data-section-color="#e8a5c4"
    >
      <div className="section-left">
        <div className="section-image">
          <div className="image-placeholder">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616c9c67f9b?w=400&h=600&fit=crop&crop=faces"
              alt="Woman in pink theme"
              className="section-img"
            />
          </div>
        </div>
      </div>
      <div className="section-right pink-bg">
        {/* Section navigation dots */}

        <div className="section-content">
          <h2 className="section-title">
            A Collective
            <br />
            That <em>Triggers</em>
            <br />
            Systemic
            <br />
            Change
          </h2>

          <button
            className="explore-btn clickable"
            onClick={(e) => {
              e.stopPropagation();
              onClick && onClick();
            }}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;
