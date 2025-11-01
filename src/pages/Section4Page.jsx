import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import CustomCursor from "../components/CustomCursor";
import "./Section4Page.scss";

const Section4Page = ({ onBack }) => {
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Handle scroll to show/hide header
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 10) {
            // Always show at top
            setHeaderVisible(true);
          } else if (currentScrollY < lastScrollY.current) {
            // Scrolling up - show header
            setHeaderVisible(true);
          } else if (
            currentScrollY > lastScrollY.current &&
            currentScrollY > 50
          ) {
            // Scrolling down - hide header
            setHeaderVisible(false);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animations variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const sectionVariants = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      <motion.div
        className="section4-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Header Navigation */}
        <motion.header
          className={`page-header ${headerVisible ? "visible" : "hidden"}`}
          variants={sectionVariants}
        >
          <div className="header-left">
            <span className="section-number">04 - 04</span>
            <span className="section-title">
              A Collective that Believes In People
            </span>
          </div>

          <div className="header-center">
            <div className="logo-badge">
              <span className="v-logo">B&P</span>
              <span className="impact-text">Impact</span>
              <span className="report-text">Report</span>
              <span className="year blue">2024</span>
            </div>
          </div>

          <div className="header-right">
            <motion.button
              className="download-btn clickable"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download the full report
            </motion.button>
            <motion.button
              className="menu-btn clickable"
              onClick={onBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Menu ≡
            </motion.button>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section className="hero-section" variants={sectionVariants}>
          <div className="hero-container">
            <div className="hero-left">
              <motion.div className="hero-image" variants={imageVariants}>
                <div className="image-placeholder">
                  <img
                    src="/Back4.png"
                    alt="Section 4 background"
                    className="section-img"
                  />
                </div>
              </motion.div>
            </div>

            <div className="hero-right blue-bg">
              <div className="hero-content">
                <motion.div
                  className="section-number"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  04 - 04
                </motion.div>

                <motion.div
                  className="section-icon orange-dot"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
                >
                  B&P
                </motion.div>

                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                >
                  A Collective
                  <br />
                  That <em>Believes</em>
                  <br />
                  In People
                </motion.h1>

                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                >
                  Empowering individuals and organizations through meaningful
                  communication and human-centered strategies.
                </motion.p>

                <motion.button
                  className="explore-btn clickable"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  EXPLORE
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content sections can be added here similar to Section1Page */}

        {/* Bottom Navigation */}
        <motion.nav className="bottom-navigation" variants={sectionVariants}>
          <button className="back-btn clickable" onClick={onBack}>
            ← Back to Overview
          </button>
          <div className="nav-indicators">
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator active"></div>
          </div>
          <button className="next-btn clickable">End →</button>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Section4Page;
