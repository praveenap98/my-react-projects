import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({project:{name, description, appLink, githubLink}}) => {
    return(
        <div className='card-container'>
            <h3>{name}</h3>
            <p>{description}</p>
            <a className='btn blue' href={appLink} target='_tab'>App Link</a>
            <a className='btn red' href={githubLink} target='_tab'>Github</a>
        </div>
    )
}

export default ProjectCard;