import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WorkContext from '../../contexts/works';
import './scss/Footer.scss';
import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaBehance, FaGithub } from 'react-icons/fa';
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const Footer = ({ title }) => {
    let d = new Date();
    const state = useContext(WorkContext);
    const works = state.works;
    const index = works.findIndex(work => work.title === title);

    const curr = works[index]
    let prev;
    let next;

    if (index-1 > -1) {
        next = works[index-1];
    } else {
        next = works[works.length-1];
    }

    if (index + 1 === works.length) {
        prev = works[0];
    } else {
        prev = works[index+1];
    }

    const nextBlock = (
        <div className='projects'>
            <div className='project title'>{ next.title }</div>
            <RiArrowRightLine className='project arrow' />
        </div>
    );

    const prevBlock = (
        <div className='projects'>
            <RiArrowLeftLine className='project arrow' />
            <div className='project title'>{ prev.title }</div>
        </div>
    );

    return (    
        <div className='footer-container'>
            <div className='project-links'> 
                { prev.type.includes('website') ? 
                    <a href={ prev.url } target="_blank" rel="noopener noreferrer">{ prevBlock }</a> : 
                    <Link to={'/' + prev.url }>{ prevBlock }</Link>
                }

                { next.type.includes('website') ? 
                    <a href={ next.url } target="_blank" rel="noopener noreferrer">{ nextBlock }</a> : 
                    <Link to={'/' + next.url }>{ nextBlock }</Link>
                }
            </div>


            <div className='footer'>
                <div className='footer-block copyright'>&#xa9; { d.getFullYear() } Ashley Heo</div>
                <div className='footer-block top'>
                    <a href={ curr.url }>
                        top
                    </a>
                </div>
                <div className='footer-block icons'>
                    <a href='https://www.linkedin.com/in/ashley-h-4b1832118/' target='_blank' rel="noopener noreferrer">
                        <FaLinkedinIn className='icon' />
                    </a>
                    <a href='https://www.behance.net/ashleysyheo' target='_blank' rel="noopener noreferrer">
                        <FaBehance className='icon' />
                    </a>
                    <a href='https://github.com/ashleysyheo/' target='_blank' rel="noopener noreferrer">
                        <FaGithub className='icon' />
                    </a>
                    <a href='mailto:ashleysyheo@gmail.com' target='_blank' rel="noopener noreferrer">
                        <FiMail className='icon' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;