import React, {useState} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import './PortfolioSection.css';
import {Routes} from "../../types/Routes";
import {ModalComponent} from '../ModalComponent';


interface PortfolioSectionProps {
    active: boolean
    removeIsActive: () => void
    images: string[]
    fullsizeImages: string[]
    route: Routes
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
                                                                      active,
                                                                      removeIsActive,
                                                                      images,
                                                                      fullsizeImages,
                                                                      route = Routes.Cosplay
                                                                  }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const openModal = (index: number) => {
        setActiveImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);


    // Helper function to split array into chunks of 3
    const chunkArray = (array: string[], size: number) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const imageChunks = chunkArray(images, 3);

    return (
        <div className={`concert-section ${active ? "active" : ""}`}>
            <div className={'contact-close'} onClick={removeIsActive}/>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1,700:2, 900: 4}}
            >
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, index) => (
                        <div className={`photo${route === Routes.Concert ? `photo-${Routes.Concert}` : ''}`}
                             onClick={() => openModal(index)}
                             key={index}
                        >
                            <img
                                src={image}
                                style={{width: "100%", display: "block"}}
                                alt={`Portfolio photo ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>

            {/* Pass images, activeImageIndex, and closeModal to ModalComponent */}
            {isModalOpen && (
                <ModalComponent
                    activeImageIndex={activeImageIndex}
                    closeModal={closeModal}
                    images={fullsizeImages}
                />
            )}
        </div>
    );
};


