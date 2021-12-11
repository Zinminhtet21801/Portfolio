import Separator from "../../common/separator";
import { Works } from "../../data/works";
import WorkCard from "./work-card";
import "./work.css";
const Work = () => {
    const data = Works
  return <div className="work" >
      <Separator />
      <label className="section-title" >Work</label>
      <div className="work-list" >
      {data?.map(item=> (
          <WorkCard item={item} />
      ))}
      </div>
  </div>;
};

export default Work;
