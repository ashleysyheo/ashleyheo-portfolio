import React from 'react';
import './scss/Project.scss';
import Video from './Video';
import ProgressiveImage from 'react-progressive-image';
import Footer from './Footer';


const CodersPage = () => {
    return (
        <div>
            <div className='main' id="main">
                <div className='title-container'>
                    <div className='year'>2020</div>
                    <div className='title'>Coders</div>
                </div>
                <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/cover.png' placeholder="https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/cover-small.png">
                    {(src, loading) => <img className='cover-image' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='coders' />}
                </ProgressiveImage>

                <div className='content-container content-container--last margin-top'>
                    <p className='text--big-2 center margin-bottom'>
                        Anywhere, anytime study coding with <span className='coders bold'>coders</span>.
                    </p>    
                    <p className='text--big center'>
                        <span className='coders'>coders</span> is an app designed to help Korean high school and college students learn code. 
                    </p>                
                </div>

                <div className='heading1 coders'>01 Research</div>
                <div className='heading2'>User Problem</div>
                <div className='content-container'>
                    <p className='text--big semi-bold'>
                        Korean high school and college students who are interested in programming have difficulties in finding the right resources in Korean. 
                    </p>
                    <p className='text'>
                        Currently, the most common way to learn to code in Korea is by studying on your own through books or hagwons, a for-profit academy. 
                        However, many of the resources are in English and Hagwons are mostly located in Seoul, South Korea. 
                    </p>
                    <p className='text'>
                        So students who are not proficient in English or do not have access to hagwons have difficulty in studying programming and understanding how it works.
                    </p>
                </div>

                <div className='heading2'>Target Audience</div>
                <div className='content-container'>
                    <p className='text'>
                        <span className='bold coders'>coders'</span> target audiences are Korean high school and college students who are interested in computer programming but have no experience and aren’t proficient in English.  
                    </p>
                </div>

                <div className='heading1 coders'>02 Ideation</div>
                <div className='heading2'>Value Proposition</div>
                <div className='content-container'>
                    <p className='text bold'>
                        "Anywhere, anytime coders"
                    </p>
                    <p className='text'>
                        <span className='bold coders'>coders</span> aims to help Korean high school and college students who want to learn coding by allowing them to learn as 
                        they code a real project in their spare time. 
                    </p>

                    <p className='text'> 
                        The best way to learn anything is by trying it out yourself. In coders, we want students to dive right into creating the project. 
                        We are bringing the coding experience to the mobile app through interactive activities. So students will be able to learn as they create the project that they would like to make through <span className='bold'>bite-sized learning</span> in their spare time. 
                        With coders, we want to provide a different direction for studying coding in Korea. Rather being boring or pressuring, we want to help students understand and enjoy coding. 
                    </p>
                </div>

                <div className='heading2'>Site Map</div>
                <div className='content-container'>
                    <p className='text'>Because this is a learning app, I wanted the app to solely focus on it. So the structure of the app is kept simple with only having <span className='bold'>Learn, Discuss, and Profile</span> as the main feature.</p>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/site-map.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/site-map-small.png'>
                        {(src, loading) => <img className='img' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Site Map' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Wireframes</div>
                <div className='content-container'>
                    <p className='text margin-bottom--small'>
                        In the app, users will be able to select a project they would like to create from the homepage. For each project, they are divided into different sections, 
                        such as <span className='bold'>Blog Title and Image, Blog Content, Basic Styling </span>, etc. And for each section users will first study the skills that they will use for coding the project. 
                        Then users will solve sets of interactive quizzes to code the project. <br />
                    </p>
                    <p className='text'>
                        <a className='link' href="https://www.figma.com/file/w5ot0Tgzbs0FzLuWJeDqTn/10-Independent-Project-Wireframes?node-id=57%3A2">View Wireframes on Figma</a>
                    </p>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/wireframe.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/wireframe-small.png'>
                        {(src, loading) => <img className='img' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Wireframe' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Visual Design</div>
                <div className='content-container content-container'>
                    <div className='text'>
                        For the look and feel of the app, I wanted it to friendly and fun to lift the pressure and fear of studying code. 
                        So I chose a rounded typeface that worked in both Korean and English and added illustrations to add a friendly character to the app. 
                        While I wanted the app to feel friendly I didn't want it to be too childish as this app is targeted towards high school and college students. 
                        So the overall design of the app is kept simple. 
                    </div>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/visual-design.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/visual-design-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Visual Design' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Key frames</div>
                <div className='content-container content-container--last'>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen1.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen1-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Key Screen' />}
                    </ProgressiveImage>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen4.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen4-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Key Screen' />}
                    </ProgressiveImage>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen2.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen2-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Key Screen' />}
                    </ProgressiveImage>
                    <ProgressiveImage src='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen3.png' placeholder='https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/keyscreen3-small.png'>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Key Screen' />}
                    </ProgressiveImage>
                    <p className='text'>
                        <a className='link' href="https://www.figma.com/file/CNYi0sb6qER5Cv746QFRuz/12-Independent-Project-Visual-Design?node-id=140%3A0">View Prototype on Figma</a>
                    </p>
                </div>

                <div className='heading1 coders margin-bottom'>03 Prototype</div> 
                <div className='content-container'>
                    <Video video={ "https://ashleyheo-portfolio.s3.ap-northeast-2.amazonaws.com/assets/coders/prototype.mp4" } />     
                </div>
            </div>
            <Footer title={ "Craigslist Housing" } />
        </div>
    
    );
};

export default CodersPage;