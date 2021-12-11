import "./skills.css";
import Separator from "../../common/separator";
import { SkillsSet } from "../../data/skills";
import SkillCard from "./skill-card";
const Skills = () => {
  const data = SkillsSet;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => (
          <div className="skills-section">
            <label className="skills-section-title">{item.type}</label>
            <div className="skills-list">
              {item.skillsList.map((skill) => (
                <SkillCard skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
