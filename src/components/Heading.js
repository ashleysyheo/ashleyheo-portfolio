import React from 'react';
import { Link } from 'react-router-dom';
import './Heading.scss';

const Heading = () => {

    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-menu'>
                    <span className='name'><Link to='/'>(ashley heo)</Link></span>
                    <span className='information'><Link to='/information'>information</Link></span>
                </div>
                <div className='horizontal-line'></div>
            </div>
        </div>
    );
};

export default Heading;