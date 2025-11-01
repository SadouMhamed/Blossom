import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-top">
          <div className="long-live-text">
            A bold approach
            <br />
            for ambitious brands,
            <br />
            visionary leaders, and high-impact projects.
          </div>
          <div className="certified-badge">
            <div className="certified-circle">
              <span className="b-corp">B</span>
            </div>
            <div className="certified-text">
              <div>Think Bold. </div>
              <div>
                <strong>Communicate Smart.</strong>
              </div>
              <div>Inspire Always.</div>
            </div>
          </div>
        </div>

        <h1 className="main-title" data-splitting>
          <span className="title-line">House of Communication</span>
          <span className="title-line">
            <strong> & Advisory</strong>
          </span>
          <span className="title-line">
            <em></em>
          </span>
        </h1>

        <div className="quotes-section">
          <div className="quote-block">
            <p className="quote-text">
              "At Blossom &a Partners, I wanted to build more than a consultancy
              I wanted to build a House. A House where communication is not
              decoration, but a force of leadership. A place where strategy,
              culture, and aesthetics converge to give meaning and create
              influence. I deeply believe in the power of ideas, the strength of
              narratives, and the trust that grows over time. "
            </p>
            <cite className="quote-author">
              —{" "}
              <a
                href="https://www.linkedin.com/in/fawzia-mekkaoui-86b10860"
                target="_blank"
                rel="noopener noreferrer"
                className="author-link"
              >
                Fawzia Mekkaoui
              </a>
              , Founder & Director
            </cite>
          </div>

          <div className="quote-block">
            <p className="quote-text">
              " Blossom & Partners is the embodiment of this vision:<br></br>
              <strong>bold,</strong>
              <strong>precise,</strong>
              precise, and guided by collective intelligence. Our role is simple
              to help brands, leaders, and institutions write stories that
              inspire, connect, and last. "
            </p>
            <cite className="quote-author">
              <a
                href="https://www.linkedin.com/in/fawzia-mekkaoui-86b10860"
                target="_blank"
                rel="noopener noreferrer"
                className="author-link"
              >
                Fawzia Mekkaoui
              </a>
              , <strong>Founder & Director</strong>
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
