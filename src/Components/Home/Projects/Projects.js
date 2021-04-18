import React from 'react';
import "./Projects.css";
import beanClean from "../../../Images/beanClean.jpg";
import beanRoast from "../../../Images/beanRoast.jpg";
import beanPowder from "../../../Images/beanPowder.jpg";
import ProjectDetail from './ProjectDetail/ProjectDetail';

const projectData = [
    {
        image: beanClean,
        title: "Washed Up Beans",
        client: "StarBuck"
    },
    {
        image: beanRoast,
        title: "Roasted Whole Beans",
        client: "DavidOff"
    },
    {
        image: beanPowder,
        title: "Grinding Whole Bean",
        client: "Nescafe"
    }
]
const Projects = () => {
    return (
        <section className="Projects p-5">
            <div className="container">
                <div className="text-center mb-5">
                    <p>Projects</p>
                    <h2>Some Of Our Recent Projects</h2>
                </div>
                <div className="row">
                    {projectData.map(project => <ProjectDetail project={project}></ProjectDetail>)}
                </div>
            </div>
        </section>
    );
};

export default Projects;