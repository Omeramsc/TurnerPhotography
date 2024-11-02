import React, {useState} from 'react';

import './ModalComponent.css';

interface ModalComponentProps {
    activeImageIndex: number;
    closeModal: () => void;
    images: string[];
}

export const ModalComponent: React.FC<ModalComponentProps> = ({activeImageIndex, closeModal, images}) => {
    const [currentIndex, setCurrentIndex] = useState(activeImageIndex);

    // Navigate to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Navigate to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="modal fade show" style={{display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content" style={{backgroundColor: '#1f2029'}}>
                    <div className="modal-header mt-2">
                        <div className="concert-close hover-target" onClick={closeModal}></div>
                    </div>
                    <div className="modal-body">
                        <div className="carousel slide">
                            <div className="carousel-inner">
                                {images.map((image, index) => (
                                    <div key={index}
                                         className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                                        <img
                                            className="d-block w-100"
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                            <a className="carousel-control-prev" role="button" onClick={handlePrev}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" role="button" onClick={handleNext}>
                                <span className="sr-only">Next</span>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// <div className="concert-close hover-target" onClick={closeModal}></div>