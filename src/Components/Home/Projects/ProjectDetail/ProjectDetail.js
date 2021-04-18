import React from 'react';
import "./ProjectDetails.css";

const ProjectDetail = ({project}) => {
    return (
        <section className="project-details col-md-4">
            <div className="text-center">
                <div className="image-wrapper">
                    <img src={project.image} alt="projects" />
                </div>
                <h4 className="mt-3">{project.title}</h4>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus consequuntur, dolore voluptatum maxime cumque id.</p>
                <p className="client">{project.client}</p>
            </div>
        </section>
    );
};

export default ProjectDetail;