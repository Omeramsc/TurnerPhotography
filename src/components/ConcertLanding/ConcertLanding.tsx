import React, {useState} from "react";
import "./ConcertLanding.css";

import {Sections} from "../../types";
import {Routes} from '../../types/Routes'
import {AboutSection} from "../AboutSection";
import {ContactSection} from "../ContactSection";
import {concertdata} from "../data/dataConcert"
import {HeroSection} from "../HeroSection";
import {PortfolioSection} from "../PortfolioSection";

export const ConcertLanding = () => {
    const [activeSection, setActiveSection] = useState("hero"); // default to HeroSection

    React.useEffect(() => {
        if (activeSection !== 'hero' && activeSection !== 'none') {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    }, [activeSection]);

    const handleSectionChange = (section: Sections) => {
        setActiveSection(section);
    };

    const handleRemoveSection = () => {
        setActiveSection('none');
    };

    return (
        <div className={`landing-container ${activeSection}-active`}>
            <HeroSection onNavigate={handleSectionChange} backgroundImage={concertdata.backgroundImage}/>
            <AboutSection active={activeSection === "about"} removeIsActive={handleRemoveSection}
                          description={concertdata.description}/>
            <ContactSection active={activeSection === "contact"} removeIsActive={handleRemoveSection}
                            instagramPage={concertdata.instagramPage}/>
            <PortfolioSection active={activeSection === "concert"} removeIsActive={handleRemoveSection}
                              images={concertdata.images} fullsizeImages={concertdata.fullsizeImages}
                              socialLinks={concertdata.socialLinks}
                              socialLabel="Artist"
                              route={Routes.Concert}/>
        </div>
    );
};
