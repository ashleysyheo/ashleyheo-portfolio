import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryView.scss';
import ProgressiveImage from 'react-progressive-image';


const GalleryView = ({ works }) => {
    let selectWorks = [[0, 4], [1, 5], [2, 6], [3, 7]];

    return (
        <div className='gallery-container'>
            { selectWorks.map(block => {
                return (
                    <div className='project-container'>
                        {
                            block.map(idx => {
                                let work = works[idx];
                                const images = require.context('../images', true);
                                const largeImg = images('./' + work.largeImg);
                                const smallImg = images('./' + work.smallImg);
                                console.log(largeImg, smallImg);
                                let block = (
                                    <div className='project' key={ idx }>
                                        <ProgressiveImage src={ largeImg } placeholder={ smallImg }>
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
            {/* { works.map( (work, idx) => {
                const images = require.context('../images', true);
                let img = images('./' + work.img);

                return (
                    <div className='project' key={ idx }>
                        <img className='project-image' src={ img } alt={ work.title }/>
                            <div className='information'>
                                <div className='information--project-name'>{ work.title }</div>
                                <div className='information--project-year'>{ work.year }</div>
                                <div className='information--project-type'>{ work.type }</div>
                            </div>
                    </div>
                );
            })} */}
        </div>
    );
};

export default GalleryView;