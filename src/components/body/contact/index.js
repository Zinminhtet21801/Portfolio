import Separator from "../../common/separator";
import "./contact.css";
import SocialContact from "../../common/social-contact/index";
const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>
            Want to get in touch? Contact me on any of the following platforms.
            😊
          </p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf").default}>
            <i class="fas fa-cloud-download-alt"></i>Download Résumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
