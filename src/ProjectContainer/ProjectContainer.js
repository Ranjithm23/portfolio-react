import React from 'react';
import './ProjectContainer.css';
import shoppingWebsiteImg from '../assets/shopingwebsite.jpeg';
import jobPortalImg from '../assets/job_portal.jpeg';

const ProjectContainer = () => {
    const MyProjects = [
        {
            img: shoppingWebsiteImg,
            title: 'Shopping Website',
            desc: 'Discover the perfect dress for any occasion with our trendy, affordable collection at [Shopper]',
            link: 'https://github.com/Ranjithm23/MERN-ECOM.git',
        },
        {
            img: jobPortalImg,
            title: 'Java Project',
            desc: 'The Spring Boot Job Portal is a web application that facilitates the process of job searching and recruitment. It provides a platform for job seekers to create profiles, search for jobs, and apply for positions.',
            link: 'https://github.com/Ranjithm23/Job_Portal.git',
        },
    ];

    return (
        <div className='project-container' id='projects'>
            <h1>Projects</h1>
            <p>Here are some projects I’ve worked on to make people’s lives easier.</p>
            <div className='project-container__projects'>
                {
                    MyProjects.map((project, index) => (
                        <div key={index} className='project-container__project'>
                            <div className='project-container__image' style={{ backgroundImage: `url(${project.img})` }}>
                                <div className='project-container__overlay'>
                                    <h2>{project.title}</h2>
                                    <p>{project.desc}</p>
                                    <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectContainer;
