import './project-list-style.css'
import { ProjectColumn } from './ProjectColumn'
export const ProjectList = ({project}) => {
    return(
        <div className="project__list">
            <ProjectColumn project={project} column={3} numberColumn={1} />
            <ProjectColumn project={project} column={3} numberColumn={2} />
            <ProjectColumn project={project} column={3} numberColumn={3} />
        </div>
    )
}
