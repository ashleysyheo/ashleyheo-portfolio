import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './scss/Project.scss';
import Video from './Video';
import Footer from './Footer';


const FootPage = () => {
    return (
        <div>
            <div className='main' id="main">
                <div className='title-container'>
                    <div className='year'>2019</div>
                    <div className='title'>Foot</div>
                </div>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/cover.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/cover-small.png'>
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Foot App' />}
                </ProgressiveImage>

                <div className='heading1'>Overview</div>
                <div className='content-container'>
                    <p className='text'>
                        <span className='bold'>Foot</span> is a mobile app designed to bring you the fastest live score and the latest news of hundreds of teams, 
                        leagues, and competitions worldwide.
                    </p>      
                    <p className='text'>
                        Its primary goal is to create a robust environment where people can interact and keep up with the fast moving football world by providing 
                        live scores, stats, and news. 
                    </p>              
                </div>

                <div className='heading1'>About</div>
                <div className='content-container'>
                    <p className='text text--big bold'>
                        Playground for Football Enthusiasts 
                    </p>
                    <p className='text'>
                        Foot is for football enthusiasts all over the world, whether you are a maniac or a newbie. 
                    </p>
                    <p className='text'>
                        It is for people who desire to receive information such as game results, line ups, live relays, stats, and news from their favorite teams. 
                        And also follow up with news of leagues that their team is affiliated with. So now, you don't have to be apart from football for a single moment!
                    </p>
                </div>

                <div className='heading1'>User Flow</div>
                <div className='content-container'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/site-map.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/site-map-small.png'>
                        {(src, loading) => <img className='img--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='User Flow' />}
                    </ProgressiveImage>
                </div>

                <div className='heading1'>Wireframes</div>
                <div className='content-container'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/wireframe.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/wireframe-small.png'>
                        {(src, loading) => <img className='img--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Wireframe' />}
                    </ProgressiveImage>
                </div>

                <div className='heading1'>Visual Design</div>
                <div className='content-container'>
                    <p className='text'>
                        The main focus on the visual design was to make Foot more approachable to a younger audience and give a feeling of being in a football field. 
                        To fit the requirements, a vivid green color and a neo-Grotesk typeface Suisse Int’l was mainly used around the app. For each team’s page, the 
                        team’s representative color was used (e.g. maroon for FC Barcelona). 
                    </p>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/visual-design.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/visual-design-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Visual Design' />}
                    </ProgressiveImage>
                </div>

                <div className='heading1 margin-bottom'>Prototype</div> 
                <div className='content-container'>
                    <Video video={ 'https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/foot/prototype.mp4' } />     
                </div>          
            </div>
            <Footer title={ "Foot" } />
        </div>
    
    );
};

export default FootPage;


