import React from "react";
import "./Section3.scss";

const Section3 = ({ onClick, className = "" }) => {
  return (
    <section
      id="section-3"
      className={`scroll-section section-3 ${className}`}
      onClick={onClick}
      data-section-color="#f4d03f"
    >
      <div className="section-left">
        <div className="section-image">
          <div className="image-placeholder">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=faces"
              alt="Woman in yellow theme"
              className="section-img"
            />
          </div>
        </div>
      </div>
      <div
        className="section-right yellow-bg"
        style={{
          backgroundImage: "url(/Back3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Section navigation dots */}

        <div className="section-content">
          <h2 className="section-title">
            A Collective
            <br />
            That
            <br />
            <em>Transforms</em>
            <br />
            Fashion
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

export default Section3;
