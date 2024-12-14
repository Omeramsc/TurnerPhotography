import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import './ModalComponent.css';

interface ModalComponentProps {
    images: string[];
    activeImageIndex: number;
    closeModal: () => void;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
                                                                  images,
                                                                  activeImageIndex,
                                                                  closeModal,
                                                              }) => {
    const [index, setIndex] = useState<number>(activeImageIndex);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Modal
            show={true}
            onHide={closeModal}
            centered
            dialogClassName="modal-xl"
            contentClassName="modal-content"
            backdropClassName="modal-overlay"
        >
            <Modal.Header>
                <div className={'concert-close'} onClick={closeModal}/>
            </Modal.Header>
            <Modal.Body>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    interval={3000} // Auto-slide every 3 seconds
                    controls={true}
                    indicators={true}
                >
                    {images.map((image, imgIndex) => (
                        <Carousel.Item key={imgIndex}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={`Slide ${imgIndex + 1}`}
                                loading="lazy"
                                style={{maxHeight: '80vh', objectFit: 'contain'}}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};