import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './scss/Project.scss';
import Footer from './Footer';

const FcBarcelonaPage = () => {
    return (
        <div>
            <div className='main' id='main'>
                <div className='title-container'>
                    <div className='year'>2020</div>
                    <div className='title'>FC Barcelona</div>
                </div>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/cover.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/cover-small.png'>
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <div className='content-container'>
                    <p className='text center'>
                        FC Barcelona is a book on the past, present, and future of Spain’s famous Futbol Club Barcelona. 
                    </p>                    
                </div>

                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/1.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/1-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/2.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/2-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/3.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/3-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/4.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/4-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/5.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/5-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/6.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/6-small.png'>
                    {(src, loading) => <img className='img margin-bottom--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/7.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/fc-barcelona/7-small.png'>
                    {(src, loading) => <img className='img margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='FC Barcelona' />}
                </ProgressiveImage>
            </div>

            <Footer title={ "FC Barcelona" } />
        </div>
    );
};

export default FcBarcelonaPage;