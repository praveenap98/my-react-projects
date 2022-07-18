import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = ({projects}) => {
    return (
        <div className='project-list-container'>
            {
                projects.map((project) => <ProjectCard key={project.id} project={project}/>)
            }
        </div>
    )
}

export default ProjectList;