import React from 'react';
import {Link} from "react-router-dom";

import './ContactSection.css';

export const ContactSection: React.FC = () => (
    <div className={'contact-section'}>
        <Link to={'/'} className={'contact-close hover-target'}/>
        <div className={'section-center'}>
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
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/ChibaMeta/" className="hover-target">
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    </div>
);