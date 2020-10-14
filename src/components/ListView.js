import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.scss';

const ListView = ({ works }) => {
    return (
        <div>
            <div className='table'>
                <div className='thead'>
                    <div className='heading'>
                        <div className='th year'>Year</div>
                        <div className='th title'>Project</div>
                        <div className='th type'>Type</div>
                        <div className='th url'>Website</div>
                    </div>
                </div>
                <div className='tbody'>
                    { works.map((work, idx) => {
                        return (
                            <div className='tr' key={ idx }>
                                <div className='td year'>{ work.year }</div>
                                <div className='td title'>
                                    { work.type.includes('website') ? 
                                        <a href={ work.url }>{ work.title }</a> : 
                                        <Link to={'/' + work.url }>{ work.title }</Link>

                                    }           
                                </div>
                                <div className='td type'>{ work.type }</div>
                                <div className='td url'>
                                    { work.type.includes('website') ? 
                                            <a href={ work.url } target="_blank" rel="noopener noreferrer">{ work.url }</a> : 
                                            <Link to={'/' + work.url }>{ 'ashleysyheo.com/' + work.url }</Link>

                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default ListView;