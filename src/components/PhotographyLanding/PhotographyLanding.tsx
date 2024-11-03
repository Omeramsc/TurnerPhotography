import React, {useState} from "react";
import "./PhotographyLanding.css";

import {Sections} from "../../types";
import {AboutSection} from "../AboutSection";
import {ContactSection} from "../ContactSection";
import {HeroSection} from "../HeroSection";
import {PortfolioSection} from "../PortfolioSection";

export const PhotographyLanding = () => {
    const [activeSection, setActiveSection] = useState("hero"); // default to HeroSection

    const handleSectionChange = (section: Sections) => {
        setActiveSection(section);
    };

    const handleRemoveSection = () => {
        setActiveSection('none');
    };

    return (
        <div className={`landing-container ${activeSection}-active`}>
            <HeroSection onNavigate={handleSectionChange}/>
            <AboutSection active={activeSection === "about"} removeIsActive={handleRemoveSection}/>
            <ContactSection active={activeSection === "contact"} removeIsActive={handleRemoveSection}/>
            <PortfolioSection active={activeSection === "concert"} removeIsActive={handleRemoveSection}/>
        </div>
    );
};


