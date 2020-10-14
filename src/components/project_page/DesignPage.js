import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './scss/Project.scss';
import Footer from './Footer';

const DesignPage = () => {
    const images = require.context('./assets/design-a-principle', true);
    return ( 
        <div>
            <div className='main' id='main'>
                <div className='title-container'>
                    <div className='year'>2019</div>
                    <div className='title'>Design a Principle</div>
                </div>
                <ProgressiveImage src={ images('./cover.png') } placeholder={ images('./cover-small.png') }>
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <div className='content-container'>
                    <p className='text center'>
                    Designing and typesetting a book adapted from The Vignelli Canon by Massimo Vignelli. 
                    With its simple design and color, the book focuses on the fundamental aspects of design 
                    that are emphasized in the excerpt.
                    </p>                    
                </div>
                
                <ProgressiveImage src={ images('./1.png') } placeholder={ images('./1-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./2.png') } placeholder={ images('./2-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./3.png') } placeholder={ images('./3-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./4.png') } placeholder={ images('./4-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./5.png') } placeholder={ images('./5-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./6.png') } placeholder={ images('./6-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./7.png') } placeholder={ images('./7-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src={ images('./8.png') } placeholder={ images('./8-small.png') }>
                    {(src, loading) => <img className='img margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
            </div>

            <Footer title={ "Design a Principle" } />
        </div>
    );
};

export default DesignPage;