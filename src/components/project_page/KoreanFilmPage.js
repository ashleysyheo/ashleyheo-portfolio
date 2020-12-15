import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './scss/Project.scss';
import Footer from './Footer';

const KoreanFilmPage = () => {
    return (
        <div>
            <div className='main' id='main'>
                <div className='title-container'>
                    <div className='year'>2020</div>
                    <div className='title'>Korean Independent Film Screening</div>
                </div>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/posters.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/posters-small.png'>
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Collection of posters' />}
                </ProgressiveImage>
                <div className='content-container'>
                    <p className='text'>
                        The following posters are a result of my work in the Advanced Typography Studio at Parsons School of Design. 
                        The posters were designed for a hypothetical film screening event to create a coherent identity system under two 
                        sets of rules: Times New Roman and No Images. Using geometric shapes as a metaphor, the 5 posters represents 5 Korean 
                        Independent Films. 
                    </p>                    
                </div>

                <div className='image-container'>
                    <div className='heading2 inline-block' >Worst Woman</div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film1.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film1-small.png'>
                        {(src, loading) => <img className='img--small-2 margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out", alignSelf: "center" }} src={src} alt='Korean Film Poster: Worst Woman' />}
                    </ProgressiveImage>
                </div>

                <div className='image-container'>
                    <div className='heading2'>Little Forest</div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film2.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film2-small.png'>
                        {(src, loading) => <img className='img--small-2 margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out", alignSelf: "center" }} src={src} alt='Korean Film Poster: Little Forest' />}
                    </ProgressiveImage>
                </div>

                <div className='image-container'>
                    <div className='heading2'>Bleak Night</div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film3.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film3-small.png'>
                        {(src, loading) => <img className='img--small-2 margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out", alignSelf: "center" }} src={src} alt='Korean Film Poster: Little Forest' />}
                    </ProgressiveImage>
                </div>

                <div className='image-container'>
                    <div className='heading2'>King of Jokgu</div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film4.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film4-small.png'>
                        {(src, loading) => <img className='img--small-2 margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out", alignSelf: "center" }} src={src} alt='Korean Film Poster: Little Forest' />}
                    </ProgressiveImage>
                </div>

                <div className='image-container'>
                    <div className='heading2'>Social Phobia</div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film5.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/korean-film/korean-film5-small.png'>
                        {(src, loading) => <img className='img--small-2 margin-bottom--big' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out", alignSelf: "center" }} src={src} alt='Korean Film Poster: Little Forest' />}
                    </ProgressiveImage>
                </div>


            </div>

            <Footer title={ "Korean Independent Film Screening" } />
        </div>
    );
};

export default KoreanFilmPage;