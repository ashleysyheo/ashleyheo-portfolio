import React, { useContext } from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Link } from 'react-router-dom';
import './IndexSort.scss';
import WorkContext from '../contexts/works';

const IndexSort = () => {
    const state = useContext(WorkContext);
    // let selectWorks = [[0, 1, 7], [4, 6], [2, 3], [5, 8, 9]];
    // let selectWorks = [[0, 4], [1, 6, 8], [2, 9], [3, 5, 7]];
    let selectWorks = [[0, 1, 3], [4, 6], [2, 8], [5, 7, 9]];

    return (
        <div className='gallery-container'>
            { selectWorks.map(block => {
                return (
                    <div className='project-container'>
                        {
                            block.map(idx => {
                                let work = state.works[idx];
                                let block = (
                                    <div className='project' key={ idx }>
                                        <ProgressiveImage src={ work.largeImg } placeholder={ work.smallImg }>
                                            {(src, loading) => <img className='project-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt={ work.title } />}
                                        </ProgressiveImage>
                                        <div className='information'>
                                            <div className='information--project-name'>{ work.title }</div>
                                            <div className='information--project-year'>{ work.year }</div>
                                            <div className='information--project-type'>{ work.type }</div>
                                        </div>
                                    </div>
                                );

                                return (
                                    <>
                                        { work.type.includes('website') ? 
                                            <a href={ work.url } target="_blank" rel="noopener noreferrer">{ block }</a> : 
                                            <Link to={'/' + work.url }>{ block }</Link>

                                        }
                                    </>
                                );
                            })
                        }
                    </div>
                )
            }) }
        </div>
    );
};

export default IndexSort;