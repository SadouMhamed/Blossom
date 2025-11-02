import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.scss";

const HeroSection = () => {
  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="hero-section">
      <div className="hero-left">
        <motion.div
          className="hero-top"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>

        <motion.h1
          className="main-title"
          data-splitting
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="title-line">House of Communication</span>
          <span className="title-line">
            <strong> & Advisory</strong>
          </span>
          <span className="title-line">
            <em></em>
          </span>
        </motion.h1>

        <motion.div
          className="quotes-section"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="orange-circle">
              <span className="arrow">↗</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <span>SCROLL TO DISCOVER</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
