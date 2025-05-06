import React from 'react';
import { Link } from 'react-router-dom'
import './Video.css';
import logo from '../assets/logo.png';
import Galaxy from '../assets/galaxy.mp4';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Galaxy} type='video/mp4' />
            </video>
            <div><img className='logo' src={logo} alt=""/></div>
            <div className='content'>
                <p>
                    Availane isn’t just another social platform - it’s your digital home for communities,
                    collaboration, and creativity. Whether you're a creator, organization, or innovator -
                    Availane gives you the power to grow.
                </p>
                <div>
                <Link className='btn' >Login with Nefbook</Link>
                </div>
            </div>
        </div>
    );
};

export default Video;
