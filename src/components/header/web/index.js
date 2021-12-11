import "./web.css";
const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <i class="far fa-sticky-note option-icon "></i>Project
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <i class="fas fa-laptop option-icon "></i>Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#works">
          <i class="fas fa-briefcase option-icon "></i>Work
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <i class="far fa-user option-icon "></i>Contact
        </a>
      </div>
    </div>
  );
};

export default Web;
