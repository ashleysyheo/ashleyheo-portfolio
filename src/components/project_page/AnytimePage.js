import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import './scss/Project.scss';
import Video from './Video';
import prototype from './assets/anytime/prototype.mov';
import { MdArrowForward } from 'react-icons/md';
import Footer from './Footer';


const AnytimePage = () => {
    const images = require.context('./assets/anytime', true);
    return (
        <div>
            <div className='main' id="main">
                <div className='title-container'>
                    <div className='year'>2020</div>
                    <div className='title'>Anytime</div>
                </div> 
                
                <ProgressiveImage src={ images('./cover.png') } placeholder={ images('./cover-small.png') }>
                    {(src, loading) => <img className='cover-image img--small' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Anytime App' />}
                </ProgressiveImage>

                <div className='heading1 anytime'>Overview</div>
                <div className='content-container content-container--last'>
                    <p className='text'>
                        Anytime aims to create an experience that encourages the New School students, faculties, and staff 
                        to actively upkeep the campus facilities to create a better educational environment.
                    </p>                    
                </div>

                <div className='heading1 anytime'>01 Research</div>
                <div className='heading2'>Problem</div>
                <div className='content-container'>
                    <p className='text bold'>
                        How could we create an experience to upkeep the New School campus facilities without time consumption 
                        for the users who are reporting and receiving the work orders? 
                    </p>
                    <p className='text'>
                        Thomas Hobbes, an English philosopher, once said that humans are inherently selfish. People tend to lean 
                        towards those that benefits them and ignore if it does not harm them directly. 
                    </p>
                    <p className='text'>
                        The underlying problem is that people tend to overlook the facility damages, rather than reporting the problem 
                        to be fixed. But even though the damage may seem little now, as the damages grow, it will turn into a bigger 
                        problem. So, it would eventually disrupt the initial experience the school intends to provide, which is a high quality of education. 
                    </p>
                </div>

                <div className='heading2'>User Interview</div>
                <div className='content-container'>
                    <p className='text bold'>
                        Why won't people report facility damages? <br />
                        Why is the upkeep of facilities not taking place with the current system? 
                    </p>
                    <p className='text'>
                        While people understand that repairs are needed, according to fellow students I have interviewed, the lack of 
                        accessibility and poor user experience of the current facilities management system prevents them from reporting the damages. 
                    </p>

                    <p className='text'>
                        “There was a problem with the lights in my dorm, so I tried to get it fixed, but I don’t know where to ask and how to fill 
                        in the work order.  I had to search the dorm building walls to find a notice or guidance about the work order, but couldn’t 
                        find it anywhere. I had to email my RA to get the link to the work order website” <br />
                        <span style={{ fontStyle: 'italic' }}>- Peer A -</span>
                    </p>

                    <p className='text'>
                        “Onetime, the projector in my studio class broke, but none of us knew where to ask in the first place, and also fixing this 
                        would obviously take a lot of time. Well someone's going to fix it someday. So we just left it broken.“ <br />
                        <span style={{ fontStyle: 'italic' }}>- Peer B -</span>
                    </p>
                </div>

                <div className='heading2'>Problem With the Current Facilities Management Website</div>
                <div className='content-container'>
                    <p className='text'>
                        Currently, there is only a website (desktop version only) to submit work orders. 
                    </p>
                    <p className='text'>
                        First, to access the facilities management website from the New School main page, you need to go to the Buildings section then 
                        click on the Work Order link. 
                    </p>
                    <p className='text bold center label'>
                        NewSchool website <MdArrowForward className='arrow' /> ? <MdArrowForward className='arrow' />  Buildings <MdArrowForward className='arrow' /> Work Order 
                    </p>
                    <p className='text'>
                        The Work Order link is under the Buildings section but there’s no link or menu to access the Buildings section from the main page. 
                        Searching for Work Order shows no related result so unless you search Buildings from the New School website, people cannot find the 
                        Work Order link. 
                    </p>
                    <p className='text'>
                        The Facilities Maintenance website is under the Buildings section but there are no menus on the main page to go to Buildings. So unless 
                        you search for work Buildings people cannot find the Work Order link. Also, searching for Work Order shows no related result. 
                    </p>

                    <ProgressiveImage src={ images('./current_website.png') } placeholder={ images('./current_website-small.png') }>
                        {(src, loading) => <img className='img margin-bottom' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Current New School Facilities Maintenance Website' />}
                    </ProgressiveImage>
                    <p className='text'>
                        The interface of the website is not clear. To figure out how to create a work order, you have to click on the various buttons. Also, some 
                        unnecessary elements could be removed. 
                    </p>
                </div>

                <div className='heading1 anytime'>02 Ideation</div>
                <div className='heading2'>Solution</div>
                <div className='content-container'>
                    <p className='text'>
                        Based on the research, the main problems users were facing were the lack of accessibility of the New School maintenance website, which 
                        ultimately leads to disengagement in upkeeping the campus facilities. Users have more access to phones, but the current website is difficult 
                        to find and doesn't support mobile. So, an app that you can download on your phone will help improve accessibility. 
                    </p>
                    <p className='text'>
                        We want to build a platform where users can easily report damages, making the bothersome work not bothersome. Also, we aim to create an 
                        accessible platform where users can become part of preserving the campus environment. 
                    </p>
                </div>

                <div className='heading2'>User Flow</div>
                <div className='content-container'>
                    <p className='text'>
                        I wanted to keep the user flow as simple as possible. Users can access the <span className='bold'>work order post button</span> anywhere within 
                        the main pages(work order list and calendar). The <span className='bold'>work order list</span> is set as the home page so that both the posters 
                        and maintenance workers have easy access to the active work orders. 
                    </p>
                    <ProgressiveImage src={ images('./user-flow.png') } placeholder={ images('./user-flow-small.png') }>
                        {(src, loading) => <img className='img--small margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='User Flow' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Wireframes</div>
                <div className='content-container'>
                    <ProgressiveImage src={ images('./wireframe.png') } placeholder={ images('./wireframe-small.png') }>
                        {(src, loading) => <img className='img' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Wireframe' />}
                    </ProgressiveImage>
                </div>

                <div className='heading2'>Visual Design</div>
                <div className='content-container content-container--last'>
                    <div className='text'>
                        The concept of <span className='bold'>Anytime</span> comes from a band-aid. When someone gets hurt, you simply apply a band-aid. But if you leave 
                        the scar alone, it may result in a serious wound. Like our body, the campus facilities also need to apply a band-aid anytime. 
                    </div>
                    <div className='text'>
                        For visual design <span className='bold'>Anytime</span> is based on the New School identity, so I decided on using the New School Red. For typography, 
                        as this is informative, I used a neo-Grotesk typeface, Suisse Int’l, which is simple and neutral. 
                    </div>
                    <ProgressiveImage src={ images('./visual-design.png') } placeholder={ images('./visual-design-small.png') }>
                        {(src, loading) => <img className='img margin-top' style={{ filter: loading ? "blur(10px)" : 'none', transition: loading ? "none" : "filter 0.2s ease-out" }} src={src} alt='Visual Design' />}
                    </ProgressiveImage>
                </div>

                <div className='heading1 anytime margin-bottom'>03 Prototype</div> 
                <div className='content-container'>
                    <Video video={ prototype } />     
                </div>          
            </div>
            <Footer title={ "Anytime" } />
        </div>
    
    );
};

export default AnytimePage;


