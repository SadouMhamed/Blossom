import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import "./App.scss";

// Import des composants
import LoadingScreen from "./components/LoadingScreen";
import TransitionPage from "./components/TransitionPage";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import Section from "./components/Section";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section1Page from "./pages/Section1Page";
// TODO: Import other section pages when they exist
// import Section2Page from "./pages/Section2Page";
// import Section3Page from "./pages/Section3Page";
// import Section4Page from "./pages/Section4Page";

// Enregistrer les plugins GSAP
gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    sectionNumber: 1,
    title:
      "A Collective<br />That <em>Benefits</em><br />The Planet &<br />Society",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=faces",
    backgroundColor: "green",
    color: "#a8b5a0",
    expandedContent: {
      subtitle:
        "Découvrez comment Vestiaire Collective transforme l'industrie de la mode pour créer un impact positif sur la planète et la société.",
      items: [
        {
          title: "Impact Environnemental",
          text: "Vestiaire Collective contribue à réduire l'empreinte carbone de l'industrie de la mode.",
        },
        {
          title: "Impact Social",
          text: "Notre plateforme crée des opportunités économiques pour des millions de vendeurs.",
        },
        {
          title: "Économie Circulaire",
          text: "Nous favorisons un modèle économique durable basé sur la réutilisation.",
        },
      ],
    },
  },
  {
    sectionNumber: 2,
    title: "A Collective<br />That <em>Triggers</em><br />Systemic<br />Change",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108755-2616c9c67f9b?w=400&h=600&fit=crop&crop=faces",
    backgroundColor: "pink",
    color: "#e8a5c4",
    expandedContent: {
      subtitle:
        "Découvrez comment Vestiaire Collective catalyse un changement systémique dans l'industrie de la mode et au-delà.",
      items: [
        {
          title: "Innovation Technologique",
          text: "Nos solutions technologiques révolutionnent l'expérience de la mode seconde main.",
        },
        {
          title: "Partenariats Stratégiques",
          text: "Nous collaborons avec des marques et institutions pour amplifier notre impact.",
        },
        {
          title: "Éducation & Sensibilisation",
          text: "Nous sensibilisons les consommateurs aux enjeux de la mode durable.",
        },
      ],
    },
  },
  {
    sectionNumber: 3,
    title: "A Collective<br />That<br /><em>Transforms</em><br />Fashion",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=faces",
    backgroundColor: "yellow",
    color: "#f4d03f",
    expandedContent: {
      subtitle:
        "Découvrez comment Vestiaire Collective révolutionne l'industrie de la mode grâce à l'innovation et la durabilité.",
      items: [
        {
          title: "Mode Circulaire",
          text: "Nous promouvons un modèle de consommation responsable et durable.",
        },
        {
          title: "Authentification",
          text: "Notre expertise garantit l'authenticité de chaque pièce sur notre plateforme.",
        },
        {
          title: "Communauté Globale",
          text: "Nous connectons des millions de passionnés de mode à travers le monde.",
        },
      ],
    },
  },
  {
    sectionNumber: 4,
    title: "A Collective<br />That <em>Believes</em><br />In People",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=faces",
    backgroundColor: "blue",
    color: "#a8c5e8",
    expandedContent: {
      subtitle:
        "Découvrez comment Vestiaire Collective place l'humain au cœur de sa mission pour créer un avenir plus durable et inclusif.",
      items: [
        {
          title: "Diversité & Inclusion",
          text: "Nous valorisons la diversité et créons un environnement inclusif pour tous.",
        },
        {
          title: "Développement Durable",
          text: "Nous investissons dans le développement des talents et des compétences.",
        },
        {
          title: "Impact Social",
          text: "Nous soutenons les communautés locales et les initiatives sociales.",
        },
      ],
    },
  },
];

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [expandedSection, setExpandedSection] = useState(null); // null, 1, 2, 3, 4
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'section1', 'section2', etc.

  useEffect(() => {
    if (showLoading || showTransition || currentPage !== "home") return;

    // Initialiser Lenis pour le smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Attendre que le DOM soit prêt
    setTimeout(() => {
      const scrollSections = document.querySelectorAll(".scroll-section");
      const sectionsContainer = document.querySelector(".sections-container");
      const heroSection = document.querySelector(".hero-section");

      if (!scrollSections.length || !sectionsContainer || !heroSection) return;

      // Initialiser toutes les sections comme cachées (en bas)
      scrollSections.forEach((section, index) => {
        gsap.set(section, {
          y: "100%",
          zIndex: 5, // Au-dessus de la hero section
        });

        // Ajouter l'événement de clic pour expansion
        section.addEventListener("click", () => handleSectionClick(index + 1));
        section.style.cursor = "pointer";
      });

      // Hero section reste statique et visible avec opacité 100%
      if (heroSection) {
        gsap.set(heroSection, {
          opacity: 1,
          zIndex: 1, // En dessous des sections
        });

        // S'assurer que tout le contenu de la hero section commence avec opacité 100%
        const heroContent = document.querySelectorAll(
          ".hero-section .hero-left, .hero-section .hero-right, .hero-section .scroll-indicator"
        );
        heroContent.forEach((content) => {
          gsap.set(content, {
            opacity: 1, // Opacité 100% au début
          });
        });
      }

      // Animation fade out du contenu de la hero section dès le début du scroll
      ScrollTrigger.create({
        trigger: sectionsContainer,
        start: "top 95%", // Commence très tôt quand on commence à scroller
        end: "30% center", // Se termine quand la première section apparaît
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Fade out fluide du contenu à l'intérieur de la hero section
          const heroContent = document.querySelectorAll(
            ".hero-section .hero-left, .hero-section .hero-right, .hero-section .scroll-indicator"
          );
          heroContent.forEach((content) => {
            gsap.to(content, {
              opacity: 1 - progress,
              duration: 0.1,
              ease: "none",
            });
          });
        },
      });

      // Créer des ScrollTriggers individuels pour chaque section
      scrollSections.forEach((section, index) => {
        // Répartition manuelle pour garantir que toutes les sections s'affichent
        const sectionStarts = [0, 30, 55, 75]; // Points de départ personnalisés
        const sectionEnds = [35, 60, 85, 100]; // Points de fin personnalisés

        const sectionStart = sectionStarts[index];
        const sectionEnd = sectionEnds[index];

        ScrollTrigger.create({
          trigger: sectionsContainer,
          start: `${sectionStart}% top`,
          end: `${sectionEnd}% bottom`,
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Mettre à jour la navigation
            if (progress > 0.1) {
              setCurrentSection(index + 1);
            }

            // Animation GSAP sophistiquée pour le scrolling des sections
            const limitTop = 15; // Limite de 15% du haut
            const yPosition = Math.max(limitTop, (1 - progress) * 100);

            // Animation principale avec effets GSAP
            gsap.to(section, {
              y: `${yPosition}%`,
              duration: 0.3,
              ease: "power2.out",
              scale: 0.95 + progress * 0.05, // Scale de 0.95 à 1.0 pendant l'animation
              opacity: Math.min(1, progress + 0.2), // Fade in progressif
              rotationX: (1 - progress) * 2, // Légère rotation 3D
              transformOrigin: "center bottom",
            });

            // Animation parallaxe pour le contenu interne
            const sectionContent = section.querySelector(".section-content");
            if (sectionContent) {
              gsap.to(sectionContent, {
                y: `${(1 - progress) * 20}px`, // Effet parallaxe subtil
                duration: 0.3,
                ease: "power1.out",
              });
            }

            // Effet d'empilement : les sections précédentes restent visibles en dessous
            if (index > 0) {
              scrollSections.forEach((prevSection, prevIndex) => {
                if (prevIndex < index) {
                  // Calculer la position d'empilement pour chaque section précédente
                  const stackOffset = (index - prevIndex) * 8; // 8% d'offset entre chaque section
                  const stackPosition = limitTop - stackOffset; // Position empilée

                  gsap.to(prevSection, {
                    y: `${stackPosition}%`,
                    scale: 1 - (index - prevIndex) * 0.02, // Légère réduction de taille
                    opacity: 1, // Reste visible
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              });
            }
          },
        });
      });
    }, 100);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showLoading, showTransition, currentPage]);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setShowTransition(true);
  };

  const handleTransitionComplete = () => {
    setShowTransition(false);
  };

  const handleSectionClick = (sectionNumber) => {
    // 1. Étendre la section (moment de "loading")
    setExpandedSection(sectionNumber);

    // 2. Après 5 secondes, naviguer vers la page dédiée
    setTimeout(() => {
      setCurrentPage(`section${sectionNumber}`);
      setExpandedSection(null); // Reset l'état d'expansion
    }, 5000);
  };

  const handleBackToHome = () => {
    // Retourner à la page principale
    setCurrentPage("home");
    // Reset scroll position
    window.scrollTo(0, 0);
  };

  // Rendu conditionnel des pages
  if (currentPage === "section1") {
    return <Section1Page onBack={handleBackToHome} />;
  }

  // TODO: Add other section pages when they are created
  if (currentPage === "section2") {
    // return <Section2Page onBack={handleBackToHome} />;
    console.log("Section2Page not yet implemented");
    setCurrentPage("home"); // Fallback to home for now
  }

  if (currentPage === "section3") {
    // return <Section3Page onBack={handleBackToHome} />;
    console.log("Section3Page not yet implemented");
    setCurrentPage("home"); // Fallback to home for now
  }

  if (currentPage === "section4") {
    // return <Section4Page onBack={handleBackToHome} />;
    console.log("Section4Page not yet implemented");
    setCurrentPage("home"); // Fallback to home for now
  }

  return (
    <div className="App">
      {/* Curseur personnalisé */}
      <CustomCursor />

      {/* Écran de chargement */}
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Page de transition */}
      {showTransition && (
        <TransitionPage onComplete={handleTransitionComplete} />
      )}

      {/* Header avec animation de couleur */}
      {!showLoading && !showTransition && (
        <motion.header
          className="header"
          animate={{
            backgroundColor: expandedSection
              ? `${
                  sectionsData.find((s) => s.sectionNumber === expandedSection)
                    .color
                }95`
              : "rgba(245, 244, 240, 0.95)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="header-left">
            {expandedSection ? (
              <button
                className="back-btn clickable"
                onClick={handleBackToHome}
                style={{
                  color: "white",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              >
                ← Retour
              </button>
            ) : (
              <div className="logo">Blossom & Partners</div>
            )}
          </div>
          <div className="header-center">
            <div className="impact-badge">
              <span className="vc-logo">VC</span>
              <span className="impact-text">Impact</span>
              <span className="report-text">Report</span>
              <span className="year-badge">2023</span>
            </div>
          </div>
          <div className="header-right">
            {!expandedSection && (
              <>
                <a href="#" className="download-link clickable">
                  Download the full report
                </a>
                <button
                  className="menu-btn clickable"
                  onClick={() => setIsMenuOpen(true)}
                >
                  Menu <span className="menu-icon">≡</span>
                </button>
              </>
            )}
          </div>
        </motion.header>
      )}

      {/* Navigation sections à droite */}
      {!showLoading && !showTransition && (
        <div className="section-navigation">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`section-nav-item ${
                currentSection === num ? "active" : ""
              } clickable`}
              onClick={() => {
                const section = document.querySelector(`#section-${num}`);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="nav-number">0{num}</span>
            </div>
          ))}
        </div>
      )}

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <button
            className="menu-close clickable"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
          <nav className="menu-nav">
            <div className="menu-links">
              <a
                href="#section1"
                className="clickable"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="menu-number">01</span>
                <span className="menu-title">
                  A Collective that benefits the planet & society
                </span>
              </a>
              <a
                href="#section2"
                className="clickable"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="menu-number">02</span>
                <span className="menu-title">
                  A Collective that triggers systemic change
                </span>
              </a>
              <a
                href="#section3"
                className="clickable"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="menu-number">03</span>
                <span className="menu-title">
                  A Collective that transforms fashion
                </span>
              </a>
              <a
                href="#section4"
                className="clickable"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="menu-number">04</span>
                <span className="menu-title">
                  A Collective that believes in people
                </span>
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Contenu principal */}
      <main className="main-content">
        {/* Section Hero */}
        <HeroSection />

        {/* Sections avec animation d'extension simple */}
        <div className="sections-container">
          <Section1 onClick={() => handleSectionClick(1)} />
          <Section2 onClick={() => handleSectionClick(2)} />
          <Section3 onClick={() => handleSectionClick(3)} />
          <Section4 onClick={() => handleSectionClick(4)} />
        </div>

        {/* Extension de la section cliquée */}
        <AnimatePresence>
          {expandedSection && (
            <motion.div
              className="section-expansion"
              initial={{
                position: "fixed",
                top: `${15 + (expandedSection - 1) * 8}%`,
                left: "5%",
                width: "90%",
                height: "100vh",
                borderRadius: "30px",
              }}
              animate={{
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                borderRadius: 0,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{
                backgroundColor: sectionsData.find(
                  (s) => s.sectionNumber === expandedSection
                ).color,
                zIndex: 3000,
              }}
            >
              {(() => {
                const section = sectionsData.find(
                  (s) => s.sectionNumber === expandedSection
                );
                return (
                  <Section
                    key={section.sectionNumber}
                    {...section}
                    expanded={true}
                    isLoading={true}
                  />
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
