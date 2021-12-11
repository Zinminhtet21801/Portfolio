import { SocialData } from "../../data/social";
import "./social-contact.css";

const SocialContact = () => {
  const data = SocialData;
  return (
    <div className="social-contact" >
      {data.map(({ platform, icon, link }) => (
        <div>
            <a href={link}  >
                <div className="social-icon-div" >
                <img src={icon} alt="" className="social-icon" />
                </div>
            </a>
        </div>
      ))}
    </div>
  );
};

export default SocialContact;
