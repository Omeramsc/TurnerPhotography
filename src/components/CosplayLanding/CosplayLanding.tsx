import React, {useState} from "react";
import "./CosplayLanding.css";

import {Sections} from "../../types";
import {Routes} from "../../types/Routes";
import {AboutSection} from "../AboutSection";
import {ContactSection} from "../ContactSection";
import {cosplaydata} from "../data/dataCosplay"
import {HeroSection} from "../HeroSection";
import {PortfolioSection} from "../PortfolioSection";


export const CosplayLanding = () => {
    const [activeSection, setActiveSection] = useState("hero"); // default to HeroSection

    const handleSectionChange = (section: Sections) => {
        setActiveSection(section);
    };

    const handleRemoveSection = () => {
        setActiveSection('none');
    };

    return (
        <div className={`landing-container ${activeSection}-active`}>
            <HeroSection onNavigate={handleSectionChange} backgroundImage={cosplaydata.backgroundImage}/>
            <AboutSection active={activeSection === "about"} removeIsActive={handleRemoveSection}
                          description={cosplaydata.description}/>
            <ContactSection active={activeSection === "contact"} removeIsActive={handleRemoveSection}
                            instagramPage={cosplaydata.instagramPage}/>
            <PortfolioSection active={activeSection === "concert"} removeIsActive={handleRemoveSection}
                              images={cosplaydata.images} fullsizeImages={cosplaydata.fullsizeImages}
                              route={Routes.Cosplay}/>
        </div>
    );
};


