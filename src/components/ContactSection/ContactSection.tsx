import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';


import './ContactSection.css';

interface ContactSectionProps {
    active: boolean
    removeIsActive: () => void

}

export const ContactSection: React.FC<ContactSectionProps> = ({active,removeIsActive}) => (
    <div className={`contact-section ${active ? "active" : ""}`}>
        <div className="contact-close hover-target" onClick={removeIsActive} />
        <div className="section-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <img
                            src={require('../../assets/main/frame-sized.jpg')}
                            className="w-100 h-auto"
                            style={{maxWidth: '750px'}}
                            alt="Contact"
                        />
                    </div>
                    <a href="mailto:omeramsc@gmail.com" className="hover-target text-center">
                        omeramsc@gmail.com
                    </a>
                </div>
                <div className="col-12 text-center mt-4 social">
                    <a href="https://www.instagram.com/omerams.live/" className="hover-target">
                        <FontAwesomeIcon icon={faInstagram} className="mr-2"/> Instagram
                    </a>
                    <a href="https://www.facebook.com/ChibaMeta/" className="hover-target">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2"/> Facebook
                    </a>
                </div>
            </div>
        </div>
    </div>
);