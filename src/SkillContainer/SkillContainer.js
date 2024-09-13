import React from 'react';
import skillimg from "../skills2.jpeg";
import "./SkillContainer.css";
import { LinearProgress } from '@mui/material';

const SkillContainer = () => {
    return (
        <div className='skillcontainer' id='skills'>
            <div className='skillcontainer_image'>
                <img src={skillimg} alt='Skill_image' />
            </div>
            <div className='skillcontainer_text'>
                <h2>SKILLSET</h2>
                <div className='skillcontainer_skillset'>
                    <h5>React js</h5>
                    <div className='skillcontainer_slider skillcontainer_slider1'>
                        <LinearProgress className='reactjs-progress' variant='determinate' value={70} />
                    </div>
                </div>
                <div className='skillcontainer_skillset'>
                    <h5>Java</h5>
                    <div className='skillcontainer_slider skillcontainer_slider2'>
                        <LinearProgress className='java-progress' variant='determinate' value={75} />
                    </div>
                </div>
                <div className='skillcontainer_skillset'>
                    <h5>JavaScript</h5>
                    <div className='skillcontainer_slider skillcontainer_slider3'>
                        <LinearProgress className='javascript-progress' variant='determinate' value={60} />
                    </div>
                </div>
                <div className='skillcontainer_skillset'>
                    <h5>CSS</h5>
                    <div className='skillcontainer_slider skillcontainer_slider4'>
                        <LinearProgress className='css-progress' variant='determinate' value={80} />
                    </div>
                </div>
                <div className='skillcontainer_skillset'>
                    <h5>SQL</h5>
                    <div className='skillcontainer_slider skillcontainer_slider5'>
                        <LinearProgress className='sql-progress' variant='determinate' value={75} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillContainer;
