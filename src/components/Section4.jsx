import React from "react";
import "./Section4.scss";

const Section4 = ({ onClick, className = "" }) => {
  return (
    <section
      id="section-4"
      className={`scroll-section section-4 ${className}`}
      onClick={onClick}
      data-section-color="#a8c5e8"
    >
      <div className="section-left">
        <div className="section-image">
          <div className="image-placeholder">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=faces"
              alt="Person in blue theme"
              className="section-img"
            />
          </div>
        </div>
      </div>
      <div
        className="section-right blue-bg"
        style={{
          backgroundImage: "url(/Back4.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Section navigation dots */}

        <div className="section-content">
          <h2 className="section-title">
            Subtle &Engaging
            <br />
            Ready to write the next chapter
            <br />
            <em>with us?</em>
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

export default Section4;
