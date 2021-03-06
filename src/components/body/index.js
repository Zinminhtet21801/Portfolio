import About from "./about";
import "./body.css";
import Contact from "./contact";
import Projects from "./projects";
import Skills from "./skills";
import Work from "./work";
const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="works">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
