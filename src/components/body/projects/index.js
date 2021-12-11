import Separator from "../../common/separator"
import { ProjectData } from "../../data/projects"
import ProjectCard from "./project-card"
import "./projects.css"

const Projects = () => {
    const projects = ProjectData
    return (
        <div className="projects" >
        <Separator />
            <label className="section-title" >Projects</label>
            <div>
            {projects?.map(project=> (
                <ProjectCard project={project} />
            ))}
            </div>
        </div>
    )
}

export default Projects
