import React from 'react';
import { Link } from 'react-router-dom';

import './HeroSection.css';


export const HeroSection: React.FC = () =>
    (
        <div className="hero-section">
            <Link to={'/about'} className="about-text hover-target">about</Link>
            <Link to={'/contact'} className="contact-text hover-target">contact</Link>
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
                <Link to={'/portfolio'} className="col-11 col-md-12 text-center">
                    <p className="pt-5">
                        <span className="concert-text concert hover-target"
                        >Portfolio</span>
                    </p>
                </Link>
            </div>
        </div>
    )

