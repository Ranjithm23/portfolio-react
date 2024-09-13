import React from 'react';
import './ProjectContainer.css';

const ProjectContainer = () => {
    const MyProjects = [
        {
            img: 'https://private-user-images.githubusercontent.com/126844190/311443080-d0cf93a8-30e2-4386-8773-52404a36b6cb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYyMDQ0MzAsIm5iZiI6MTcyNjIwNDEzMCwicGF0aCI6Ii8xMjY4NDQxOTAvMzExNDQzMDgwLWQwY2Y5M2E4LTMwZTItNDM4Ni04NzczLTUyNDA0YTM2YjZjYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxM1QwNTA4NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zODU5OGEwNzE2MTc0YzdhYTVkYzkwYTlmNGM1YTUxNTc0NTQ1NjBjNTQ1YWRlODNiZTBhOWJlZDU3ZDZjZmYyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.uy2h6siuLcGMeXzfiIxBGO0jcG8y8NQaTfLGP9NkGxA',
            title: 'Shopping Website',
            desc: 'Discover the perfect dress for any occasion with our trendy, affordable collection at [Shopper]',
            link: 'https://github.com/Ranjithm23/MERN-ECOM.git',
        },
        {
            img: 'https://private-user-images.githubusercontent.com/126844190/291032040-5c25831c-5ecc-4b9e-8ff6-8150967e2b39.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYyMDQyNTMsIm5iZiI6MTcyNjIwMzk1MywicGF0aCI6Ii8xMjY4NDQxOTAvMjkxMDMyMDQwLTVjMjU4MzFjLTVlY2MtNGI5ZS04ZmY2LTgxNTA5NjdlMmIzOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkxM1QwNTA1NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MGYwNzY2OWE4NDNhM2JlZjVlNzJiMjlkN2QwMDU1ZGFhZWU2MjEwNWUyZGYwMmQzM2FmZmFlNzVkNmE0ODhlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.klpqhaE-4rJGKxPfEBwPGy4opFHxZktdQt3I59b8d3U',
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
