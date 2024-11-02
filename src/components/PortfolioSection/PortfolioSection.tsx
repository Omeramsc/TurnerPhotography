import React, { useState } from 'react';
import {Link} from "react-router-dom";

import './PortfolioSection.css';
import { ModalComponent } from '../ModalComponent';

interface PortfolioSectionProps {}

export const PortfolioSection: React.FC<PortfolioSectionProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    // Array of image paths
    const images: string[] = Array.from({ length: 18 }, (_, index) =>
        require(`../../assets/portfolio/thumbnails/${index + 1}.jpg`)
    );

    const openModal = (index: number) => {
        setActiveImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="concert-section">
            <Link to={'/'} className={'contact-close hover-target'}/>
            <div className="container">
                <div className="row">
                    {images.map((image, index) => (
                        <div key={index} onClick={() => openModal(index)} className="col-md-6 col-lg-4">
                            <img
                                src={image}
                                className="portfolio-photo"
                                alt={`Portfolio photo ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pass images, activeImageIndex, and closeModal to ModalComponent */}
            {isModalOpen && (
                <ModalComponent
                    activeImageIndex={activeImageIndex}
                    closeModal={closeModal}
                    images={images}
                />
            )}
        </div>
    );
};