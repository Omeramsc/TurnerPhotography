import React from 'react';

import './HeroSection.css';
import {Sections} from "../../types";


interface HeroSectionProps {
    onNavigate: (section: Sections) => void;
    backgroundImage: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({onNavigate, backgroundImage},) =>
    (
        <div className="hero-section" style={{
            backgroundImage: `linear-gradient(rgba(0, 11, 0, 0.4), rgba(50, 0, 0, 0.1)), url(${backgroundImage})`
        }}       >
                 
            <p>
                <div className="about-text " onClick={() => onNavigate('about')}>
                    <span className="arrow">About</span>
                </div>
            </p>
            <p>
                <div className="contact-text "
                     onClick={() => onNavigate('contact')}>
                    <span className="arrow">Contact</span>
                </div>
            </p>
            <div className="section-center">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-8 text-center" id="watermark">
                            <img src={require("../../assets/main/watermark_white.png")} className="img-fluid"
                                 alt="Omer Logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-bottom">
                <p className='col-11 col-md-12 text-center'>
                    <div className="concert-text concert "
                         onClick={() => onNavigate('concert')}>
                        <span className="arrow-bottomå">Portfolio</span>
                    </div>
                </p>

            </div>
        </div>
    )

