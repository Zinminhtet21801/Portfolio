import "./mobile.css";
const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(false)}>
        {isOpen && <i class="far fa-times-circle"></i>}
      </div>
      <div className="mobile-options">
        <div className="mobile-option" onClick={() => setIsOpen(false)}> 
          <a href="#project">
            <i class="far fa-sticky-note option-icon "></i>Project
          </a>
        </div>

        <div className="mobile-option" onClick={() => setIsOpen(false)}>
          <a href="#skills">
            <i class="fas fa-laptop option-icon "></i>Skills
          </a>
        </div>

        <div className="mobile-option" onClick={() => setIsOpen(false)}>
          <a href="#works">
            <i class="fas fa-briefcase option-icon "></i>Work
          </a>
        </div>

        <div className="mobile-option" onClick={() => setIsOpen(false)}>
          <a href="#contact">
            <i class="far fa-user option-icon "></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
