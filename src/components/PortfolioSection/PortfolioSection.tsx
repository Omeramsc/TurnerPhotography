import React from 'react';
import {Link} from "react-router-dom";

import './Concert.css';
import './PortfolioSection.css';

export const PortfolioSection: React.FC = () => (
    <div className="concert-section">
        <Link to={'/'} className="concert-close hover-target"/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h3>Portfolio</h3>
                </div>
                <div className="row" id="gallery" data-toggle="modal" data-target="#exampleModal">
                    {[...Array(18)].map((_, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <img
                                src={require(`../../assets/portfolio/thumbnails/${index + 1}.jpg`)}
                                className="portfolio-photo"
                                data-target="#carouselExample"
                                data-slide-to={index}
                                alt={`Portfolio photo ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);