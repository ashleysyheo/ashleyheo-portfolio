import React from 'react';
import './scss/Project.scss';
import Video from './Video';
import prototype from './assets/craigslist-housing/prototype.mp4';
import ProgressiveImage from 'react-progressive-image';
import Footer from './Footer';


const CraigslistPage = () => {
    return (
        <div>
            <div className='main' id="main">
                <div className='title-container'>
                    <div className='year'>2020</div>
                    <div className='title'>Craigslist Housing</div>
                </div>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/cover.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/cover-small.png">
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Craigslist Housing App' />}
                </ProgressiveImage>

                <div className='heading1'>Overview</div>
                <div className='content-container content-container--last'>
                    <p className='text'>
                        Craigslist is one of the most powerful and global marketplace websites in the world. People can buy boats, discuss history, find a job, and rent a house in the same place. 
                    </p>
                    <p className='text'>
                        Craigslist Housing is one of the main verticals of this infinite platform. Its primary goal is to create an environment where people can not only buy/sell, and rent houses, but also find roommates anywhere around the world.
                    </p>
                    
                </div>

                <div className='heading1 craigslist'>01 Research</div>
                <div className='heading2'>User Problem</div>
                <div className='content-container'>
                    <p className='text'>
                        It can be tiresome for users to find a house. To find a house, one needs to find a housing website/app in a particular area. 
                        In New York alone, there are platforms like StreetEasy, NakedApartments, and Compass. If the scope of relocation is expanded overseas, 
                        the user's effort will increase further. There are countless housing websites/apps. London has Zoopla and Rightmove, and Paris has Lodgis and Vingt Paris. 
                        So here, users have to figure out which website is more efficient and has the most properties. Thus, it's an inconvenient process that makes bothersome things more bothersome.
                    </p>
                    <p className='text bold'>
                        How can Craigslist Housing solve this Problem?
                    </p>
                    <p className='text'>
                        Craigslist serves 700 cities spread across 70 countries. Users can access each website from “www.craigslist.org/about/sites” or 
                        from clicking on regions on the main page. Craigslist Housing saves users the trouble of finding each local housing site/app and 
                        provides users the opportunity to live anywhere in the world. Also, many listings are written in English, the most popular official 
                        language, which increases accessibility and usability.
                    </p>
                </div>

                <div className='heading2'>Problems with Craigslist Housing</div>
                <div className='content-container'>
                    <p className='text'>
                        Scam, which is one of Craigslist’s main problem that attacks the credibility of the product. While the Housing vertical includes guidelines on 
                        avoiding and preventing scams, however, it is not noticeable for most users.
                    </p>
                    <p className='text'>
                        Within the website and the app, there are repetitive and unclear elements that prevent users from having a satisfying experience. 
                    </p>
                </div>

                <div className='heading2'>Target Audience</div>
                <div className='content-container'>
                    <p className='text'>
                        The current Craigslist’s target audience is anyone, male or female, of all ages from almost anywhere. 
                        For the redesigned Craigslist Housing the target audiences are narrowed down to 
                        <span className='bold'> recent graduates and workers (around 20 - 30) around the world, looking for housing in a new region/country when relocating for new jobs.</span>
                    </p>
                </div>

                <div className='heading2'>User Persona</div>
                <div className='content-container'>
                    <p className='text'>
                        Based on user interviews, I created 2 personas with highlights on goal differences. From interviews, I observed that Craigslist Housing is used to do a preliminary search on the desired location they want to move to. I created a primary persona which as a young adult looking for a new house when relocating to a new country for work, and a secondary person, who is a college student looking for different housing options. 
                    </p>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/persona1.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/persona1-small.png">
                        {(src, loading) => <img className='img margin-bottom' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Primary Persona' />}
                    </ProgressiveImage>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/persona2-small.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/persona2-small.png'>
                        {(src, loading) => <img className='img' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Secondary Persona' />}
                    </ProgressiveImage>
                </div>
                    
                <div className='heading2'>Journey Map</div>
                <div className='content-container content-container--last'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/journey-map-small.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/journey-map-small.png'>
                        {(src, loading) => <img className='img--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Journey Map' />}
                    </ProgressiveImage>
                </div>

                <div className='heading1 craigslist'>02 Ideation</div>
                <div className='heading2'>Value Proposition</div>
                <div className='content-container'>
                    <p className='text bold'>
                        "Live Anywhere"
                    </p>
                    <p className='text'>
                        For the redesign, I focused mainly on Craigslist Housing helps prospective tenants who are looking for a new home when 
                        relocating by reducing user’s trouble in searching for a new platform to look for houses in a particular region/country 
                        and enabling people to find a home and live anywhere in the world through the worldwide operating Craigslist.
                    </p>
                </div>

                <div className='heading2'>Business Goal</div>
                <div className='content-container'>
                    <p className='text'>
                        The business goal of Craigslist housing is to create a reliable platform where users feel comfortable to find their homes and 
                        create a satisfying experience to encourage users to return to find their next home. 
                    </p>
                    <p className='text'>
                        Craigslist Housing also aims to make the platform more accessible around the world. <br />
                        How could we compete with the existing local housing apps/websites?
                    </p>
                </div>

                <div className='heading2'>Site Map</div>
                <div className='content-container'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/site-map.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/site-map-small.png'>
                        {(src, loading) => <img className='img' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Site Map' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>User Flow</div>
                <div className='content-container'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/user-flow.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/user-flow-small.png'>
                        {(src, loading) => <img className='img--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='User Flow' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Wireframes</div>
                <div className='content-container'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/wireframe.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/wireframe-small.png'>
                        {(src, loading) => <img className='img' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Wireframe' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Visual Design</div>
                <div className='content-container content-container--last'>
                    <div className='text'>
                        For the visual design I wanted something that could be approachable to a younger audience, but at the same time keep the 
                        characteristics of Craigslist. To fit those requirements, I decided on using bright violet as the primary color and the 
                        system font (apple device: SF Pro display) as the typeface.
                    </div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/visual-design.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/visual-design-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Visual Design' />}
                    </ProgressiveImage>
                </div>

                <div className='heading1 craigslist margin-bottom'>03 Prototype</div> 
                <div className='content-container'>
                    <Video video={ "https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/craigslist-housing/prototype.mp4" } />     
                </div>          
            </div>
            <Footer title={ "Craigslist Housing" } />
        </div>
    
    );
};

export default CraigslistPage;