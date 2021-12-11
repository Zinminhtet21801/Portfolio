import "./work-card.css";
import ShowMoreText from "react-show-more-text";

const WorkCard = ({ item }) => {
  return (
    <div className="work-card">
      <img src={item.companyLogo} alt="companyLogo" className="work-logo" />
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateResigned}</label>
        </div>
        <div className="work-desc">
          <ShowMoreText
            /* Default options */
            lines={3}
            more="Show more"
            less="Show less"
            className="content-css"
            anchorClass="my-anchor-css-class show-more-btn"
            expanded={false}
            width={280}
            truncatedEndingComponent={"... "}
          >
            <p>{item.workDescription}</p>
          </ShowMoreText>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
