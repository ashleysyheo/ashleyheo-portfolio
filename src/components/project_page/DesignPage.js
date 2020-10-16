import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './scss/Project.scss';
import Footer from './Footer';

const DesignPage = () => {
    return ( 
        <div>
            <div className='main' id='main'>
                <div className='title-container'>
                    <div className='year'>2019</div>
                    <div className='title'>Design a Principle</div>
                </div>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/cover.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/cover-small.png'>
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <div className='content-container'>
                    <p className='text center'>
                    Designing and typesetting a book adapted from The Vignelli Canon by Massimo Vignelli. 
                    With its simple design and color, the book focuses on the fundamental aspects of design 
                    that are emphasized in the excerpt.
                    </p>                    
                </div>
                
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/1.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/1-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/2.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/2-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/3.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/3-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/4.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/4-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/5.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/5-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/6.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/6-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/7.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/7-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/8.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/design-a-principle/8-small.png'>
                    {(src, loading) => <img className='img margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Design a Principle' />}
                </ProgressiveImage>
            </div>

            <Footer title={ "Design a Principle" } />
        </div>
    );
};

export default DesignPage;