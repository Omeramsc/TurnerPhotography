import React from 'react';

import styles from './ModalComponent.module.css';

export const ModalComponent: React.FC = () => (
    <div className={`${styles.modal} modal fade`} id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl" role="document">
            <div className={styles.modalContent}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ color: 'white' }}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div id="carouselExample" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {[...Array(18)].map((_, index) => (
                                <li
                                    key={index}
                                    data-target="#carouselExample"
                                    data-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                ></li>
                            ))}
                        </ol>
                        <div className="carousel-inner">
                            {[...Array(18)].map((_, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img
                                        className="d-block w-100"
                                        src={`static/portfolio/${index + 1}.jpg`}
                                        alt={`Slide ${index + 1}`}
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
);