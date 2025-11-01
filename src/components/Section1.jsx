import React from "react";
import "./Section1.scss";

const Section1 = ({ onClick, className = "" }) => {
  return (
    <section
      id="section-1"
      className={`scroll-section section-1 ${className}`}
      onClick={onClick}
      data-section-color="#a8b5a0"
    >
      <div className="section-left">
        <div className="section-image">
          <div className="image-placeholder">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=faces"
              alt="Woman in green theme"
              className="section-img"
            />
          </div>
        </div>
      </div>
      <div
        className="section-right green-bg"
        style={{
          backgroundImage: "url(/Back1.png)",
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
            That <em>Benefits</em>
            <br />
            The Planet &<br />
            Society
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

export default Section1;
