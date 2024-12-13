import React from 'react';

import './AboutSection.css';

interface AboutSectionProps {
    active: boolean;
    removeIsActive: () => void
    description: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({active, removeIsActive, description}) => (
    <div className={`about-section ${active ? "active" : ""}`}>
        <div className="about-close " onClick={removeIsActive}/>
        <div className="section-center">
            <div className="container">
                <div className="row justify-content-center flex-column align-items-center">
                    <div className="col-12 text-center d-flex flex-column image-section p-2">
                        <img src={require("../../assets/main/aboutme.jpg")} className="w-100 h-auto img-thumbnail"
                             style={{maxWidth: '350px'}} alt="img-thumbnail"/>
                        <span className='credit-text-about'>Photo by:&nbsp;<a href="https://www.instagram.com/ayeletvizan" target="_blank">Ayelet Vizan</a></span>
                    </div>
                    <div className="col-lg-8 text-center mt-4">
                        <p>{description}</p>
                    </div>
                    <div className="col-12 text-center">
                        <p><span>Omer Amsalem</span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
);


