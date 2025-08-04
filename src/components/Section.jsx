import React from "react";
import "./Section.scss";

const Section = ({
  sectionNumber,
  title,
  imageUrl,
  backgroundColor,
  expandedContent,
  className = "",
  expanded = false,
  isLoading = false,
  onClick,
}) => {
  if (expanded && isLoading) {
    return (
      <section
        id={`section-${sectionNumber}`}
        className={`scroll-section section-${sectionNumber} loading-state ${className}`}
      >
        <div className="section-left">
          <div className="section-image">
            <div className={`image-placeholder`}>
              <img
                src={imageUrl}
                alt={`Woman in ${backgroundColor} theme`}
                className="section-img"
              />
            </div>
          </div>
        </div>
        <div className={`section-right ${backgroundColor}-bg`}>
          <div className="section-content">
            <div className="section-number">0{sectionNumber} - 04</div>
            <div className="section-icon orange-dot">λ</div>
            <h2
              className="section-title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <div className="loading-indicator">
              <div className="loading-spinner"></div>
              <p className="loading-text">Chargement en cours...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (expanded) {
    return (
      <section
        id={`section-${sectionNumber}`}
        className={`scroll-section section-${sectionNumber} expanded-content ${className}`}
      >
        <div className="expanded-hero">
          <div className="expanded-left">
            <h1
              className="expanded-title"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h1>
            <p className="expanded-subtitle">{expandedContent.subtitle}</p>
          </div>
          <div className="expanded-right">
            <div className="expanded-image">
              <div className="image-placeholder">
                {/* Expanded main image */}
              </div>
            </div>
          </div>
        </div>
        <div className="expanded-content-grid">
          {expandedContent.items.map((item, index) => (
            <div className="content-block" key={index}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id={`section-${sectionNumber}`}
      className={`scroll-section section-${sectionNumber} ${className}`}
      onClick={onClick}
    >
      <div className="section-left">
        <div className="section-image">
          <div className="image-placeholder">
            <img
              src={imageUrl}
              alt={`Person in ${backgroundColor}`}
              className="section-img"
            />
          </div>
        </div>
      </div>
      <div className={`section-right ${backgroundColor}-bg`}>
        {/* Section navigation dots */}
        <div className="section-navigation-dots">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`nav-dot ${num === sectionNumber ? "active" : ""}`}
            >
              <span className="nav-number">0{num}</span>
            </div>
          ))}
        </div>

        <div className="section-content">
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>

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

export default Section;
