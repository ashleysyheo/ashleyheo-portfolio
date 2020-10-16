import React from 'react';
import resume from '../assets/resume.pdf';
import './Information.scss';

const Information = () => {
    return(
        <div className='information-container'>
            <div className='information-text'>
                Hi, I'm <span style={{ fontWeight: 600 }}>Ashley Heo</span>, a creative coder, designer, and adventurer.
            </div> 
            <div className='information-text'>
                I am currently studying Communication Design at Parsons School of Design, New York. 
            </div>
            <div className='information-text'>
                I am interested in combining design and technology to create an experience that 
                people could explore, enjoy, and work in. I am also passionate about questioning 
                why things are the way they are and finding innovative solutions outside the constraints 
                of tools and mediums.
            </div>
            <div className='information-links'>
                <span className='underline'>
                    <a className='link resume' href={ resume } target='_blank' rel="noopener noreferrer">Resume</a>
                </span>
                <span className='underline'>
                    <a className='link resume' href="https://www.linkedin.com/in/ashley-h-4b1832118/" target='_blank' rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </span>
                <span className='underline'>
                    <a className='link resume' href="https://www.behance.net/ashleysyheo" target='_blank' rel="noopener noreferrer">
                        Behance
                    </a>
                </span>
                <span className='underline'>
                    <a className='link resume' href="https://github.com/ashleysyheo/" target='_blank' rel="noopener noreferrer">
                        GitHub
                    </a>
                </span>
                <span className='underline'>
                    <a className='link resume' href="mailto:ashleysyheo@gmail.com">Email</a>
                </span>
            </div>

        </div>
    );
};

export default Information;

// Hi, I'm Ashley Heo, a creative coder, designer, and wonderer. 