// src/components/NotFoundPage.js
import { faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotFound.css'; // You can style the page using a separate CSS file

const NotFoundPage = () =>
(
    <div className="not-found-container">
        <div className="not-found-content">
            <h1>Will be back shortly!</h1>
            <p>This page is currently under construction</p>
            <div className="watermark">
                <img src="../../src/assets/main/watermark_white.png" alt="Watermark" />
            </div>
            <div className="col-12 text-center mt-4 social">
                <a href={`https://www.instagram.com/chibameta/`} className="" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
                </a>
                <a href="https://x.com/chibameta_" className="" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="mr-2" /> X/Twitter
                </a>
            </div>
            <p><a href="mailto:omeramsc@gmail.com">omeramsc@gmail.com</a></p>
        </div>
    </div>
);

export default NotFoundPage;