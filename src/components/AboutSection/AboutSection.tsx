import React from 'react';

import './AboutSection.css';

interface AboutSectionProps {
    active: boolean;
    removeIsActive: () => void
}

export const AboutSection: React.FC<AboutSectionProps> = ({active, removeIsActive}) => (
    <div className={`about-section ${active ? "active" : ""}`}>
        <div className="about-close hover-target" onClick={removeIsActive}/>
        <div className="section-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <img src={require("../../assets/main/aboutme.jpg")} className="w-100 h-auto img-thumbnail"
                             style={{maxWidth: '350px'}} alt="img-thumbnail"/>
                    </div>
                    <div className="col-lg-8 text-center mt-4">
                        <p>
                            A passionate photographer dedicated to capturing the energy and
                            essence of live music. Showcased here are moments that bring
                            forward the concert experience to life - allowing others to
                            relive the exhilaration and atmosphere of these unforgettable
                            performances..
                        </p>
                    </div>
                    <div className="col-12 text-center">
                        <p><span>Omer Amsalem</span></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
);


