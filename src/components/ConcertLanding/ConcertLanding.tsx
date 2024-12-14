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
                              route={Routes.Concert}/>
        </div>
    );
};


