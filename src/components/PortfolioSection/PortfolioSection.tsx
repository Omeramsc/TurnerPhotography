// PortfolioSection.tsx
import React, { useState } from 'react';
import './PortfolioSection.css';

import { ModalComponent } from '../ModalComponent';

export const PortfolioSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    // Array of image paths
    const images = Array.from({ length: 18 }, (_, index) => require(`../../assets/portfolio/thumbnails/${index + 1}.jpg`))

    const openModal = (index: number) => {
        setActiveImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="concert-section">
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

            {/* Pass images and activeImageIndex to ModalComponent */}
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