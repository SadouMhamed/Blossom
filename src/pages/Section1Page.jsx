import { motion } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import "./Section1Page.scss";

const Section1Page = ({ onBack }) => {
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
        className="section1-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Header Navigation */}
        <motion.header className="page-header" variants={sectionVariants}>
          <div className="header-left">
            <span className="section-number">01 - 04</span>
            <span className="section-title">
              A Collective that benefits the planet & society
            </span>
          </div>

          <div className="header-center">
            <div className="logo-badge">
              <span className="v-logo">V.</span>
              <span className="impact-text">Impact</span>
              <span className="report-text">Report</span>
              <span className="year">2023</span>
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

        {/* Hero Section - Same design as Section1 component */}
        <motion.section className="hero-section" variants={sectionVariants}>
          <div className="hero-container">
            <div className="hero-left">
              <motion.div className="hero-image" variants={imageVariants}>
                <div className="image-placeholder green-woman">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=faces"
                    alt="Woman in green theme"
                    className="section-img"
                  />
                </div>
              </motion.div>
            </div>

            <div className="hero-right green-bg">
              <div className="hero-content">
                <motion.div
                  className="section-number"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  01 - 04
                </motion.div>

                <motion.div
                  className="section-icon orange-dot"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "backOut" }}
                >
                  V.
                </motion.div>

                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                >
                  A Collective
                  <br />
                  That <em>Benefits</em>
                  <br />
                  The Planet &<br />
                  Society
                </motion.h1>

                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                >
                  Découvrez comment Vestiaire Collective transforme l'industrie
                  de la mode pour créer un impact positif sur la planète et la
                  société.
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

          {/* Bottom Navigation Pills */}
        </motion.section>

        {/* Content Section 1 - The Future of Fashion */}
        <motion.section
          className="content-section fashion-section"
          variants={sectionVariants}
        >
          <div className="section-container">
            <div className="section-left">
              <div className="section-header">
                <span className="section-tag">FASHION NEEDS FIXING</span>
                <h2 className="section-title">
                  The future of fashion is circular
                </h2>
              </div>

              <div className="section-content">
                <p className="main-text">
                  In a world where we're buying more clothes but wearing them
                  less, Vestiaire Collective is here to disrupt consumption
                  behavior by changing the way people buy.
                </p>

                <div className="highlight-stat">
                  <p className="stat-description">
                    Buying a used garment extends its life by 2.2 years on
                    average, reducing its carbon, waste and water footprint by
                    73%.
                  </p>
                  <div className="info-icon">ⓘ</div>
                </div>
              </div>
            </div>

            <div className="section-right">
              <motion.div className="section-image" variants={imageVariants}>
                <img
                  src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop&crop=center"
                  alt="Green fashion accessories"
                  className="content-image"
                />
                <div className="image-overlay-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 2 - Circular Lifecycle */}
        <motion.section
          className="content-section lifecycle-section"
          variants={sectionVariants}
        >
          <div className="full-width-container">
            <h3 className="lifecycle-title">
              Extended life of an item with Vestiaire Collective
            </h3>

            <div className="lifecycle-diagram">
              <div className="lifecycle-step">
                <div className="step-circle">
                  <span>MANUFACTURED</span>
                </div>
                <div className="step-arrow">→</div>
              </div>

              <div className="lifecycle-step">
                <div className="step-circle">
                  <span>SOLD IN RETAIL</span>
                </div>
                <div className="step-arrow">→</div>
              </div>

              <div className="lifecycle-step highlighted">
                <div className="step-circle large">
                  <span>USED AND WORN</span>
                  <div className="inner-circle">
                    <span className="highlight-text">SOLD ON VESTIAIRE</span>
                  </div>
                </div>
                <div className="step-arrow">→</div>
              </div>

              <div className="lifecycle-step">
                <div className="step-circle">
                  <span>DISPOSED</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Content Section 3 - Replacement Stats */}
        <motion.section
          className="content-section stats-section"
          variants={sectionVariants}
        >
          <div className="stats-container white-bg">
            <div className="stats-header">
              <span className="stats-tag">
                PREVENTION IS BETTER THAN A CURE
              </span>
              <h2 className="stats-title">
                Buying on Vestiaire Collective
                <br />
                replaces first-hand purchases
              </h2>
            </div>

            <div className="stats-content">
              <div className="stats-text">
                <p>
                  A well-known benefit of resale is that it prolongs the
                  lifespan of an item, but that's not the only way to fight
                  overconsumption. Buying on Vestiaire Collective also prevents
                  first-hand purchases.
                </p>

                <p>
                  Every time you choose a pre-loved item on Vestiaire Collective
                  instead of buying a new one, environmental impact is avoided.
                  We call this our <strong>displacement rate</strong>.
                  <span className="info-marker">Ⓐ</span>
                </p>
              </div>

              <div className="stats-visual">
                <div className="big-number">
                  82<span className="percent">%</span>
                </div>
                <div className="stats-description">
                  <p>
                    <strong>
                      of sold items replaced a first-hand purchase
                    </strong>
                  </p>
                  <div className="growth-indicator">
                    <span className="arrow">↗</span>
                    <span>THAT'S A 12PT INCREASE ON LAST YEAR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="displacement-question">
              <h3>How did we increase the displacement rate?</h3>
              <p>
                By empowering our community to invest in higher-quality,
                longer-lasting items and more affordable luxury fashion. And we
                can see what happens as a result.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Visual Impact Section */}
        <motion.section
          className="visual-impact-section"
          variants={sectionVariants}
        >
          <div className="impact-container">
            <div className="impact-left">
              <motion.div className="impact-image" variants={imageVariants}>
                <img
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop&crop=center"
                  alt="Luxury handbag"
                  className="handbag-image"
                />
              </motion.div>
            </div>

            <div className="impact-right">
              <div className="big-stat">
                <span className="number">82</span>
                <span className="percent">%</span>
              </div>
              <p className="stat-label">
                of sold items replaced a first-hand purchase
              </p>
              <div className="growth-stat">
                <div className="growth-icon">↗</div>
                <span>THAT'S A 12PT INCREASE ON LAST YEAR</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bottom Navigation */}
        <motion.nav className="bottom-navigation" variants={sectionVariants}>
          <button className="back-btn clickable" onClick={onBack}>
            ← Back to Overview
          </button>
          <div className="nav-indicators">
            <div className="indicator active"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
            <div className="indicator"></div>
          </div>
          <button className="next-btn clickable">Next Section →</button>
        </motion.nav>
      </motion.div>
    </>
  );
};

export default Section1Page;
