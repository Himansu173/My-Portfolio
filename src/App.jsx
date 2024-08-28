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

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isObserverActive, setIsObserverActive] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!isObserverActive) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== "Projects") {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.id !== "Projects") {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.id !== "Projects") {
          observer.unobserve(section);
        }
      });
    };
  }, [isObserverActive]);

  useEffect(() => {
    if (!isObserverActive) return;

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
        threshold: 0.3,
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
    </>
  );
}

export default App;
