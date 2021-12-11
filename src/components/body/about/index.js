import "./about.css";
import MyPhoto from "../../../assets/Programming-amico.png"
import SocialContact from "../../common/social-contact";
const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br /> <span className="info-name" >Zin Min Htet</span>.<br /> I love
          Web Development.
        </div>
        <div className="about-photo">
            <img src={MyPhoto} alt="myPhoto" className="picture" />
        </div>
      </div>

      <div className="about-bottom">
          <SocialContact />
      </div>
    </div>
  );
};

export default About;
