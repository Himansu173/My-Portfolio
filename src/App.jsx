import About from "./Components/About";
import Education from "./Components/Education";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isObserverActive, setIsObserverActive] = useState(true);

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {
    if (!isObserverActive) return;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
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
    </>
  );
}

export default App;
