import { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Zeke</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          {!isOpen && (
            <div onClick={() => setIsOpen(!isOpen)}>
              <i class="fas fa-bars menu-icon "></i>
            </div>
          )}
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
