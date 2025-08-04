import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-top">
          <div className="long-live-text">
            LONG LIVE FASHION:
            <br />
            WELCOME TO OUR 2023
            <br />
            IMPACT REPORT
          </div>
          <div className="certified-badge">
            <div className="certified-circle">
              <span className="b-corp">B</span>
            </div>
            <div className="certified-text">
              <div>Certified</div>
              <div>
                <strong>B</strong>
              </div>
              <div>Corporation</div>
            </div>
          </div>
        </div>

        <h1 className="main-title" data-splitting>
          <span className="title-line">Vestiaire Collective</span>
          <span className="title-line">
            is <strong>transforming</strong> the
          </span>
          <span className="title-line">
            <em>fashion</em> industry
          </span>
        </h1>

        <div className="quotes-section">
          <div className="quote-block">
            <p className="quote-text">
              "Our 2023 Impact Report tells an incredible story about the
              substantial impact we have achieved so far. As resale grows, we
              proudly lead the way by introducing socio-economic impact
              measurement. We have developed this report not as a beauty contest
              but as a transparency exercise, going into all aspects of our
              business."
            </p>
            <cite className="quote-author">
              — FANNY MOIZANT, CO-FOUNDER & PRESIDENT OF VESTIAIRE COLLECTIVE
            </cite>
          </div>

          <div className="quote-block">
            <p className="quote-text">
              "Our unique circular business model not only sets us apart but
              also enables us to make a significant impact in driving
              sustainability within the fashion industry."
            </p>
            <cite className="quote-author">
              — MAX BITTNER, CEO OF VESTIAIRE COLLECTIVE
            </cite>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="orange-circle">
              <span className="arrow">↗</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
};

export default HeroSection;
