import React from 'react';
import {Link} from 'react-router-dom';

import './HeroSection.css';


export const HeroSection: React.FC = () =>
    (
        <div className="hero-section">
            {/* Link to About */}
            <p>
                <Link to="/about" className="about-text hover-target">
                    <span className="arrow">About</span>
                </Link>
            </p>
            <p >
                <Link to="/contact" className="contact-text hover-target">
                    <span className="arrow">Contact</span>
                </Link>
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
                    <Link to="/portfolio" className="concert-text concert hover-target">
                        <span className="arrow-bottomå">Portfolio</span>
                    </Link>
                </p>

            </div>
        </div>
    )

