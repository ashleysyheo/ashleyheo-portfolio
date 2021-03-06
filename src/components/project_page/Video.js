import React, { useRef, useState } from 'react';
import './scss/Video.scss';
import { MdPlayArrow, MdPause} from "react-icons/md";

const Video = ({ video }) => {

    const [videoState, setVideoState] = useState(true);

    const videoRef = useRef(null);
    const startVideo = () => {
        setVideoState(false);
        videoRef.current.play();
    }

    const pauseVideo = () => {
        setVideoState(true);
        videoRef.current.pause();
    }

    return (
        <>
            <video muted ref={ videoRef } className='video'>
                <source src={ video } type="video/webm" />
            </video>
            
            <div className='buttons'>
                <MdPlayArrow onClick={ startVideo } className={`button ${videoState ? 'active' : 'inactive'}`}/>
                <MdPause onClick={ pauseVideo } className={`button ${videoState ? 'inactive' : 'active'}`}/>
            </div>
        </>
    );
};

export default Video;