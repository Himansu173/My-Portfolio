import { useEffect, useState } from 'react';
import About from "./Components/About";
import Education from "./Components/Education";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Achievement from './Components/Achievement';
import Contact from './Components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isObserverActive, setIsObserverActive] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!isObserverActive) return;

    const isMobile = window.innerWidth <= 640;
    const thresholdValue = isMobile ? 0.4 : 0.6;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: thresholdValue,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== "Projects" && entry.target.id !== "Achievement") {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id !== "Projects" || section.id !== "Achievement") {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id !== "Projects" || section.id !== "Achievement") {
          observer.unobserve(section);
        }
      });
    };
  }, [isObserverActive]);

  useEffect(() => {
    if (!isObserverActive) return;

    const isMobile = window.innerWidth <= 640;
    const thresholdValue = isMobile ? 0.6 : 0.9;

    const projectsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("Achievement");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: thresholdValue,
      }
    );

    const achievementSection = document.getElementById("Achievement");
    if (achievementSection) {
      projectsObserver.observe(achievementSection);
    }

    return () => {
      if (achievementSection) {
        projectsObserver.unobserve(achievementSection);
      }
    };
  }, [isObserverActive]);

  useEffect(() => {
    if (!isObserverActive) return;

    const isMobile = window.innerWidth <= 640;
    const thresholdValue = isMobile ? 0.1 : 0.3;

    const projectsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("Projects");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: thresholdValue,
      }
    );

    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
      projectsObserver.observe(projectsSection);
    }

    return () => {
      if (projectsSection) {
        projectsObserver.unobserve(projectsSection);
      }
    };
  }, [isObserverActive]);

  const disableObserverTemporarily = () => {
    setIsObserverActive(false);
    setTimeout(() => {
      setIsObserverActive(true);
    }, 600);
  };

  return (
    <>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} disableObserverTemporarily={disableObserverTemporarily} />
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Education">
        <Education />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Achievement">
        <Achievement />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
